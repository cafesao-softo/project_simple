import { Body, Controller, Post } from "@nestjs/common"
import { AppService } from "../services/app.service"
import { transformLowercaseBody } from "src/pipes/transformLowercaseBody.pipe"
import { DistrictModel } from "src/models/District"
import { CityModel } from "src/models/City"
import { StateModel } from "src/models/State"
@Controller("/api")
export class CreateController {
  constructor(private readonly appService: AppService) {}

  @Post()
  // Refactor URGENT!!
  async create(@Body(transformLowercaseBody) body: IBody) {
    const state = new StateModel()
    const city = new CityModel()
    const district = new DistrictModel()

    const isState = await this.appService.getState(body.state.name, false)
    const isCity = await this.appService.getCity(body.city.name, false)

    if (isState && isCity) {
      state.name = body.state.name
      city.name = body.city.name
      district.name = body.district.name

      //relationship
      district.city = isCity

      await this.appService.create(district)
    } else if (isState) {
      state.name = body.state.name
      city.name = body.city.name
      district.name = body.district.name

      //relationship
      city.district = [district]
      city.state = isState

      await this.appService.create(city)
      await this.appService.create(district)
    } else {
      district.name = body.district.name
      city.name = body.city.name
      state.name = body.state.name

      //relationship
      state.city = [city]
      city.district = [district]
      city.state = state

      await this.appService.create(state)
      await this.appService.create(city)
      await this.appService.create(district)
    }
  }
}
