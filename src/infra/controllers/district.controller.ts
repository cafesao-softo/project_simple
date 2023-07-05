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
import { IReadDistrictParamsDTO } from "src/domain/dto/read-district.dto"
import {
  IUpdateDistrictBodyDTO,
  IUpdateDistrictParamsDTO
} from "src/domain/dto/update-district.dto"
import { IDeleteDistrictParamsDTO } from "src/domain/dto/delete-district.dto"
import { DistrictEntity } from "src/domain/entities/district.entity"
import { transformLowercase } from "src/infra/pipes/transformLowercase.pipe"
import { IReadDistrictQuery } from "src/application/queries/contracts/read-district.query"
import { IUpdateDistrictCommand } from "src/application/commands/contracts/update-district.contracts"
import { IDeleteDistrictCommand } from "src/application/commands/contracts/delete-district.contracts"
import { GeoProviderEnum } from "../ioc/constants/geo.const"

@ApiTags("Districts")
@Controller("districts")
export class DistrictController {
  constructor(
    @Inject(GeoProviderEnum.ReadDistrictQuery)
    private readonly readDistrictQuery: IReadDistrictQuery,
    @Inject(GeoProviderEnum.UpdateDistrictCommand)
    private readonly updateDistrictCommand: IUpdateDistrictCommand,
    @Inject(GeoProviderEnum.DeleteDistrictCommand)
    private readonly deleteDistrictCommand: IDeleteDistrictCommand
  ) {}

  @Get("/:id")
  @ApiOperation({
    description: "Get district by name and city name"
  })
  async read(
    @Param(transformLowercase) params: IReadDistrictParamsDTO
  ): Promise<DistrictEntity | boolean> {
    return await this.readDistrictQuery.execute(params)
  }

  @Put("/:id")
  @ApiOperation({
    description: "Update district by name and city name"
  })
  async update(
    @Body() body: IUpdateDistrictBodyDTO,
    @Param(transformLowercase) query: IUpdateDistrictParamsDTO
  ) {
    return await this.updateDistrictCommand.execute({
      query,
      body
    })
  }

  @Delete("/:id")
  @ApiOperation({
    description: "Delete district by name and city name"
  })
  async delete(@Param(transformLowercase) params: IDeleteDistrictParamsDTO) {
    return await this.deleteDistrictCommand.execute(params)
  }
}
