import { Body, Controller, Post } from "@nestjs/common"
import { transformLowercaseBody } from "src/shared/pipes/transformLowercaseBody.pipe"
import { CreateService } from "./create.service"
import { StateService } from "src/state/state.service"
import { CityService } from "src/city/city.service"
import { CreateDTO } from "./dto/create.dto"
import { CreateHelper } from "./helpers/create.helper"
import { SyncHelper } from "./helpers/sync.helper"
import { ApiOperation, ApiTags } from "@nestjs/swagger"

@ApiTags("Create")
@Controller()
export class CreateController {
  constructor(
    private readonly createService: CreateService,
    private readonly stateService: StateService,
    private readonly cityService: CityService
  ) {}

  @Post()
  @ApiOperation({
    description: "Create new state/city/district"
  })
  async create(@Body(transformLowercaseBody) body: CreateDTO) {
    const createHelper = new CreateHelper(body)
    const syncHelper = new SyncHelper(this.createService)

    const isState = await this.stateService.read(
      {
        stateName: body.state.name
      },
      false
    )
    const isCity = await this.cityService.read(
      {
        cityName: body.city.name,
        stateName: body.state.name
      },
      false
    )

    if (isState && isCity) {
      const district = createHelper.district(isCity)
      await syncHelper.district(district)
    } else if (isState) {
      const district = createHelper.district()
      const city = createHelper.city(isState, district)
      await syncHelper.district(district)
      await syncHelper.city(city)
    } else {
      const { state, city, district } = createHelper.state()
      await syncHelper.state(state)
      await syncHelper.city(city)
      await syncHelper.district(district)
    }
  }
}
