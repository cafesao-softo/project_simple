import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { CityService } from "./city.service"
import { transformLowercase } from "../shared/pipes/transformLowercase.pipe"
import { City } from "./city.entity"
import { UpdateCityDTO } from "./dto/update-city.dto"

@Controller("cities")
export class CityController {
  constructor(private readonly appService: CityService) {}

  @Get("/:cityName")
  async read(
    @Param("cityName", transformLowercase) cityName: string
  ): Promise<City> {
    return await this.appService.get(cityName, true)
  }

  @Put("/:cityName")
  update(
    @Body() body: UpdateCityDTO,
    @Param("cityName", transformLowercase) cityName: string
  ): string {
    return cityName
  }

  @Delete("/:cityName")
  delete(@Param("cityName", transformLowercase) cityName: string): string {
    return cityName
  }
}
