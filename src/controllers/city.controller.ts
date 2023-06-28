import { Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { AppService } from "../services/app.service"
import { transformLowercase } from "src/pipes/transformLowercase.pipe"

@Controller("/api/cities")
export class CityController {
  constructor(private readonly appService: AppService) {}

  @Get("/:cityName")
  read(@Param("cityName", transformLowercase) cityName: string): string {
    return cityName
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
