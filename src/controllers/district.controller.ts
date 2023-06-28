import { Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { AppService } from "../services/app.service"
import { transformLowercase } from "src/pipes/transformLowercase.pipe"

@Controller("/api/districts")
export class DistrictController {
  constructor(private readonly appService: AppService) {}

  @Get("/:districtName")
  read(
    @Param("districtName", transformLowercase) districtName: string
  ): string {
    return districtName
  }

  @Put("/:districtName")
  update(
    @Param("districtName", transformLowercase) districtName: string
  ): string {
    return districtName
  }

  @Delete("/:districtName")
  delete(
    @Param("districtName", transformLowercase) districtName: string
  ): string {
    return districtName
  }
}
