import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { CityService } from "./city.service"
import { transformLowercase } from "../shared/pipes/transformLowercase.pipe"
import { City } from "./city.entity"
import { UpdateCityBodyDTO, UpdateCityParamsDTO } from "./dto/update-city.dto"
import { DeleteCityParamsDTO } from "./dto/delete-city.dto"
import { ApiOperation, ApiTags } from "@nestjs/swagger"

@ApiTags("Cities")
@Controller("cities")
export class CityController {
  constructor(private readonly appService: CityService) {}

  @Get("/:cityName/:stateName")
  @ApiOperation({
    description: "Get a city by name and state name"
  })
  async read(
    @Param(transformLowercase) params: UpdateCityParamsDTO
  ): Promise<City> {
    return await this.appService.get(params, true)
  }

  @Put("/:cityName/:stateName")
  @ApiOperation({
    description: "Update a city by name and state name"
  })
  async update(
    @Body() body: UpdateCityBodyDTO,
    @Param(transformLowercase) params: UpdateCityParamsDTO
  ) {
    return await this.appService.update(params, body)
  }

  @Delete("/:cityName/:stateName")
  @ApiOperation({
    description: "Delete a city by name and state name"
  })
  async delete(@Param(transformLowercase) params: DeleteCityParamsDTO) {
    return await this.appService.delete(params)
  }
}
