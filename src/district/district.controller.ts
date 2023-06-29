import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { transformLowercase } from "../shared/pipes/transformLowercase.pipe"
import { District } from "./district.entity"
import { DistrictService } from "./district.service"
import { UpdateDistrictDTO } from "./dto/update-district.dto"

@Controller("districts")
export class DistrictController {
  constructor(private readonly appService: DistrictService) {}

  @Get("/:districtName")
  async read(
    @Param("districtName", transformLowercase) districtName: string
  ): Promise<District[]> {
    return await this.appService.get(districtName, true)
  }

  @Put("/:cityName/:districtName")
  async update(
    @Body() body: UpdateDistrictDTO,
    @Param("cityName", transformLowercase) cityName: string,
    @Param("districtName", transformLowercase) districtName: string
  ) {
    return await this.appService.update(districtName, cityName, body)
  }

  @Delete("/:districtName")
  delete(
    @Param("districtName", transformLowercase) districtName: string
  ): string {
    return districtName
  }
}
