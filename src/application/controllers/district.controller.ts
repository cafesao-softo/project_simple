import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { transformLowercase } from "src/domain/pipes/transformLowercase.pipe"
import { StateEntity } from "src/domain/entities/state.entity"
import { IReadDistrictParamsDTO } from "src/domain/dto/read-district.dto"
import {
  IUpdateDistrictBodyDTO,
  IUpdateDistrictParamsDTO
} from "src/domain/dto/update-district.dto"
import { IDeleteDistrictParamsDTO } from "src/domain/dto/delete-district.dto"
import { ReadDistrictQuery } from "../queries/read-district.query"
import { UpdateDistrictCommand } from "../commands/update-district.command"
import { DeleteDistrictCommand } from "../commands/delete-district.command"

@ApiTags("Districts")
@Controller("districts")
export class DistrictController {
  constructor(
    private readonly readDistrictQuery: ReadDistrictQuery,
    private readonly updateDistrictCommand: UpdateDistrictCommand,
    private readonly deleteDistrictCommand: DeleteDistrictCommand
  ) {}

  @Get("/:id")
  @ApiOperation({
    description: "Get district by name and city name"
  })
  async read(
    @Param(transformLowercase) params: IReadDistrictParamsDTO
  ): Promise<StateEntity | boolean> {
    return await this.readDistrictQuery.execute(params)
  }

  @Put("/:id")
  @ApiOperation({
    description: "Update district by name and city name"
  })
  async update(
    @Body() body: IUpdateDistrictBodyDTO,
    @Param(transformLowercase) params: IUpdateDistrictParamsDTO
  ) {
    return await this.updateDistrictCommand.execute(params, body)
  }

  @Delete("/:id")
  @ApiOperation({
    description: "Delete district by name and city name"
  })
  async delete(@Param(transformLowercase) params: IDeleteDistrictParamsDTO) {
    return await this.deleteDistrictCommand.execute(params)
  }
}
