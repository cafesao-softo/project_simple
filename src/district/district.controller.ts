import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { transformLowercase } from "../shared/pipes/transformLowercase.pipe"
import { District } from "./district.entity"
import { DistrictService } from "./district.service"
import {
  UpdateDistrictBodyDTO,
  UpdateDistrictParamsDTO
} from "./dto/update-district.dto"
import { DeleteDistrictParamsDTO } from "./dto/delete-district.dto"
import {
  ReadDistrictIdParamsDTO,
  ReadDistrictParamsDTO
} from "./dto/read-district.dto"
import { ApiOperation, ApiTags } from "@nestjs/swagger"

@ApiTags("Districts")
@Controller("districts")
export class DistrictController {
  constructor(private readonly appService: DistrictService) {}

  @Get("/:id")
  @ApiOperation({
    description: "Get district by name and city name"
  })
  async read(
    @Param(transformLowercase) params: ReadDistrictIdParamsDTO
  ): Promise<District> {
    return await this.appService.readId(params, true)
  }

  @Put("/:id")
  @ApiOperation({
    description: "Update district by name and city name"
  })
  async update(
    @Body() body: UpdateDistrictBodyDTO,
    @Param(transformLowercase) params: UpdateDistrictParamsDTO
  ) {
    return await this.appService.update(params, body)
  }

  @Delete("/:id")
  @ApiOperation({
    description: "Delete district by name and city name"
  })
  async delete(@Param(transformLowercase) params: DeleteDistrictParamsDTO) {
    return await this.appService.delete(params)
  }
}
