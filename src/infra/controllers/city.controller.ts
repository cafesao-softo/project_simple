import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { DeleteCityCommand } from "../../application/commands/delete-city.command"
import { IReadCityParamsDTO } from "src/domain/dto/read-city.dto"
import {
  IUpdateCityBodyDTO,
  IUpdateCityParamsDTO
} from "src/domain/dto/update-city.dto"
import { IDeleteCityParamsDTO } from "src/domain/dto/delete-city.dto"
import { ReadCityQuery } from "../../application/queries/read-city.query"
import { UpdateCityCommand } from "../../application/commands/update-city.command"
import { CityEntity } from "src/domain/entities/city.entity"
import { transformLowercase } from "src/infra/pipes/transformLowercase.pipe"

@ApiTags("Cities")
@Controller("cities")
export class CityController {
  constructor(
    private readonly readCityQuery: ReadCityQuery,
    private readonly updateCityCommand: UpdateCityCommand,
    private readonly deleteCityCommand: DeleteCityCommand
  ) {}

  @Get("/:id")
  @ApiOperation({
    description: "Get a city by name and state name"
  })
  async read(
    @Param(transformLowercase) params: IReadCityParamsDTO
  ): Promise<CityEntity | boolean> {
    return await this.readCityQuery.execute(params)
  }

  @Put("/:id")
  @ApiOperation({
    description: "Update a city by name and state name"
  })
  async update(
    @Body() body: IUpdateCityBodyDTO,
    @Param(transformLowercase) query: IUpdateCityParamsDTO
  ) {
    return await this.updateCityCommand.execute({
      query,
      body
    })
  }

  @Delete("/:id")
  @ApiOperation({
    description: "Delete a city by name and state name"
  })
  async delete(@Param(transformLowercase) params: IDeleteCityParamsDTO) {
    return await this.deleteCityCommand.execute(params)
  }
}