import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { transformLowercase } from "../shared/pipes/transformLowercase.pipe"
import { District } from "./district.entity"
import {
  UpdateDistrictBodyDTO,
  UpdateDistrictParamsDTO
} from "./dto/update-district.dto"
import { DeleteDistrictParamsDTO } from "./dto/delete-district.dto"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { UpdateDistrictService } from "./services/update-district.service"
import { DeleteDistrictService } from "./services/delete-district.service"
import { ReadDistrictService } from "./services/read-district.service"
import { ReadDistrictParamsDTO } from "./dto/read-district.dto"

@ApiTags("Districts")
@Controller("districts")
export class DistrictController {
  constructor(
    private readonly readService: ReadDistrictService,
    private readonly updateService: UpdateDistrictService,
    private readonly deleteService: DeleteDistrictService
  ) {}

  @Get("/:id")
  @ApiOperation({
    description: "Get district by name and city name"
  })
  async read(
    @Param(transformLowercase) params: ReadDistrictParamsDTO
  ): Promise<District> {
    return await this.readService.execute(params, true)
  }

  @Put("/:id")
  @ApiOperation({
    description: "Update district by name and city name"
  })
  async update(
    @Body() body: UpdateDistrictBodyDTO,
    @Param(transformLowercase) params: UpdateDistrictParamsDTO
  ) {
    return await this.updateService.execute(params, body)
  }

  @Delete("/:id")
  @ApiOperation({
    description: "Delete district by name and city name"
  })
  async delete(@Param(transformLowercase) params: DeleteDistrictParamsDTO) {
    return await this.deleteService.execute(params)
  }
}
