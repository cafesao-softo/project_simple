import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { UpdateCityService } from "./services/update-city.service"
import { DeleteCityService } from "./services/delete-city.service"
import { transformLowercase } from "../shared/pipes/transformLowercase.pipe"
import { City } from "./city.entity"
import { UpdateCityBodyDTO, UpdateCityParamsDTO } from "./dto/update-city.dto"
import { DeleteCityParamsDTO } from "./dto/delete-city.dto"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { ReadCityParamsDTO } from "./dto/read-city.dto"
import { ReadCityService } from "./services/read-city.service"

@ApiTags("Cities")
@Controller("cities")
export class CityController {
  constructor(
    private readonly readService: ReadCityService,
    private readonly updateService: UpdateCityService,
    private readonly deleteService: DeleteCityService
  ) {}

  @Get("/:id")
  @ApiOperation({
    description: "Get a city by name and state name"
  })
  async read(
    @Param(transformLowercase) params: ReadCityParamsDTO
  ): Promise<City> {
    return await this.readService.execute(params, true)
  }

  @Put("/:id")
  @ApiOperation({
    description: "Update a city by name and state name"
  })
  async update(
    @Body() body: UpdateCityBodyDTO,
    @Param(transformLowercase) params: UpdateCityParamsDTO
  ) {
    return await this.updateService.execute(params, body)
  }

  @Delete("/:id")
  @ApiOperation({
    description: "Delete a city by name and state name"
  })
  async delete(@Param(transformLowercase) params: DeleteCityParamsDTO) {
    return await this.deleteService.execute(params)
  }
}
