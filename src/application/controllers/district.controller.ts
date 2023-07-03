import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { ApiOperation, ApiTags } from "@nestjs/swagger"

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
