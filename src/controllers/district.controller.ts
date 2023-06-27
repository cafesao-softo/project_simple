import { Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { AppService } from "../services/app.service"
import { transformLowercase } from "src/pipes/transformLowercase.pipe"

@Controller("/api/district")
export class DistrictController {
  constructor(private readonly appService: AppService) {}

  @Get("/:district")
  read(@Param("district", transformLowercase) district: string): string {
    return district
  }

  @Put("/:districtOld/:districtNew")
  update(
    @Param("districtOld", transformLowercase) districtOld: string,
    @Param("districtNew", transformLowercase) districtNew: string
  ): string {
    return `${districtOld} and ${districtNew}`
  }

  @Delete("/:district")
  delete(@Param("district", transformLowercase) district: string): string {
    return district
  }
}
