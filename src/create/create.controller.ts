import { Body, Controller, Post } from "@nestjs/common"
import { transformLowercaseBody } from "src/shared/pipes/transformLowercaseBody.pipe"
import { CreateService } from "./create.service"
import { StateService } from "src/state/state.service"
import { CityService } from "src/city/city.service"
import { CreateDTO } from "./dto/create.dto"
import { CreateHelper } from "./helpers/create.helper"
import { SyncHelper } from "./helpers/sync.helper"

@Controller()
export class CreateController {
  constructor(
    private readonly createService: CreateService,
    private readonly stateService: StateService,
    private readonly cityService: CityService
  ) {}

  @Post()
  async create(@Body(transformLowercaseBody) body: CreateDTO) {
    const createHelper = new CreateHelper(body)
    const syncHelper = new SyncHelper(this.createService)

    const isState = await this.stateService.get(body.state.name, false)
    const isCity = await this.cityService.getOne(
      body.city.name,
      body.state.name,
      false
    )

    if (isState && isCity) {
      const district = createHelper.createDistrict(isCity)
      await syncHelper.createDistrict(district)
    } else if (isState) {
      const district = createHelper.createDistrict()
      const city = createHelper.createCity(isState, district)
      await syncHelper.createDistrict(district)
      await syncHelper.createCity(city)
    } else {
      const { state, city, district } = createHelper.createState()
      await syncHelper.syncState(state)
      await syncHelper.createCity(city)
      await syncHelper.createDistrict(district)
    }
  }
}
