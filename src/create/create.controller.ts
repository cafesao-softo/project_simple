import { Body, Controller, Post } from "@nestjs/common"
import { transformLowercaseBody } from "src/shared/pipes/transformLowercaseBody.pipe"
import { State } from "src/state/state.entity"
import { City } from "src/city/city.entity"
import { District } from "src/district/district.entity"
import { CreateService } from "./create.service"
import { StateService } from "src/state/state.service"
import { CityService } from "src/city/city.service"
import { CreateDTO } from "./dto/create.dto"

@Controller()
export class CreateController {
  constructor(
    private readonly createService: CreateService,
    private readonly stateService: StateService,
    private readonly cityService: CityService
  ) {}

  @Post()
  // Refactor URGENT!!
  // Lib: ClassValidator ApiProterly
  async create(@Body(transformLowercaseBody) body: CreateDTO) {
    const state = new State()
    const city = new City()
    const district = new District()
    const isState = await this.stateService.get(body.state.name, false)
    const isCity = await this.cityService.get(body.city.name, false)
    if (isState && isCity) {
      state.name = body.state.name
      city.name = body.city.name
      district.name = body.district.name
      //relationship
      district.city = isCity
      await this.createService.create(district)
    } else if (isState) {
      state.name = body.state.name
      city.name = body.city.name
      district.name = body.district.name
      //relationship
      city.district = [district]
      city.state = isState
      await this.createService.create(city)
      await this.createService.create(district)
    } else {
      district.name = body.district.name
      city.name = body.city.name
      state.name = body.state.name
      //relationship
      state.city = [city]
      city.district = [district]
      city.state = state
      await this.createService.create(state)
      await this.createService.create(city)
      await this.createService.create(district)
    }
  }
}
