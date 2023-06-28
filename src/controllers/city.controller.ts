import { Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { AppService } from "../services/app.service"
import { transformLowercase } from "src/pipes/transformLowercase.pipe"
import { CityModel } from "src/models/City"

@Controller("/api/cities")
export class CityController {
  constructor(private readonly appService: AppService) {}

  @Get("/:cityName")
  async read(
    @Param("cityName", transformLowercase) cityName: string
  ): Promise<CityModel> {
    return await this.appService.getCity(cityName, true)
  }

  @Put("/:cityName")
  update(@Param("cityName", transformLowercase) cityName: string): string {
    return cityName
  }

  @Delete("/:cityName")
  delete(@Param("cityName", transformLowercase) cityName: string): string {
    return cityName
  }
}
