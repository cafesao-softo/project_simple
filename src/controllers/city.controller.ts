import { Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { AppService } from "../services/app.service"
import { transformLowercase } from "src/pipes/transformLowercase.pipe"

@Controller("/api/city")
export class CityController {
  constructor(private readonly appService: AppService) {}

  @Get("/:city")
  read(@Param("city", transformLowercase) city: string): string {
    return city
  }

  @Put("/:cityOld/:cityNew")
  update(
    @Param("cityOld", transformLowercase) cityOld: string,
    @Param("cityNew", transformLowercase) cityNew: string
  ): string {
    return `${cityOld} and ${cityNew}`
  }

  @Delete("/:city")
  delete(@Param("city", transformLowercase) city: string): string {
    return city
  }
}
