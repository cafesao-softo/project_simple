import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { transformLowercase } from "../shared/pipes/transformLowercase.pipe"
import { District } from "./district.entity"
import { DistrictService } from "./district.service"
import {
  UpdateDistrictBodyDTO,
  UpdateDistrictParamsDTO
} from "./dto/update-district.dto"
import { DeleteDistrictParamsDTO } from "./dto/delete-district.dto"
import { ReadDistrictParamsDTO } from "./dto/read-district.dto"

@Controller("districts")
export class DistrictController {
  constructor(private readonly appService: DistrictService) {}

  @Get("/:districtName/:cityName")
  async read(
    @Param(transformLowercase) params: ReadDistrictParamsDTO
  ): Promise<District> {
    return await this.appService.get(params, true)
  }

  @Put("/:districtName/:cityName")
  async update(
    @Body() body: UpdateDistrictBodyDTO,
    @Param(transformLowercase) params: UpdateDistrictParamsDTO
  ) {
    return await this.appService.update(params, body)
  }

  @Delete("/:districtName/:cityName")
  async delete(@Param(transformLowercase) params: DeleteDistrictParamsDTO) {
    return await this.appService.delete(params)
  }
}
