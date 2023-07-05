import {
  Body,
  Controller,
  Delete,
  Get,
  Inject,
  Param,
  Put
} from "@nestjs/common"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { IReadCityParamsDTO } from "src/domain/dto/read-city.dto"
import {
  IUpdateCityBodyDTO,
  IUpdateCityParamsDTO
} from "src/domain/dto/update-city.dto"
import { IDeleteCityParamsDTO } from "src/domain/dto/delete-city.dto"
import { CityEntity } from "src/domain/entities/city.entity"
import { transformLowercase } from "src/infra/pipes/transformLowercase.pipe"
import { IReadCityQuery } from "src/application/queries/contracts/read-city.query"
import { IUpdateCityCommand } from "src/application/commands/contracts/update-city.contracts"
import { IDeleteCityCommand } from "src/application/commands/contracts/delete-city.contracts"
import { GeoProviderEnum } from "../ioc/constants/geo.const"

@ApiTags("Cities")
@Controller("cities")
export class CityController {
  constructor(
    @Inject(GeoProviderEnum.ReadCityQuery)
    private readonly readCityQuery: IReadCityQuery,
    @Inject(GeoProviderEnum.UpdateCityCommand)
    private readonly updateCityCommand: IUpdateCityCommand,
    @Inject(GeoProviderEnum.DeleteCityCommand)
    private readonly deleteCityCommand: IDeleteCityCommand
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
