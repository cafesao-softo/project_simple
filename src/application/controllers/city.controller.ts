import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { transformLowercase } from "src/domain/pipes/transformLowercase.pipe"
import { ReadCityCommand } from "../commands/read-city.commands"
import { UpdateCityCommand } from "../commands/update-city.commands"
import { DeleteCityCommand } from "../commands/delete-city.command"
import { StateEntity } from "src/domain/entities/state.entity"
import {
  UpdateCityBodyDTO,
  UpdateCityParamsDTO
} from "src/domain/dto/update-city.dto"
import { ReadCityParamsDTO } from "src/domain/dto/read-city.dto"
import { DeleteCityParamsDTO } from "src/domain/dto/delete-city.dto"

@ApiTags("Cities")
@Controller("cities")
export class CityController {
  constructor(
    private readonly readCityCommand: ReadCityCommand,
    private readonly updateCityCommand: UpdateCityCommand,
    private readonly deleteCityCommand: DeleteCityCommand
  ) {}

  @Get("/:id")
  @ApiOperation({
    description: "Get a city by name and state name"
  })
  async read(
    @Param(transformLowercase) params: ReadCityParamsDTO
  ): Promise<StateEntity | boolean> {
    return await this.readCityCommand.execute(params)
  }

  @Put("/:id")
  @ApiOperation({
    description: "Update a city by name and state name"
  })
  async update(
    @Body() body: UpdateCityBodyDTO,
    @Param(transformLowercase) params: UpdateCityParamsDTO
  ) {
    return await this.updateCityCommand.execute(params, body)
  }

  @Delete("/:id")
  @ApiOperation({
    description: "Delete a city by name and state name"
  })
  async delete(@Param(transformLowercase) params: DeleteCityParamsDTO) {
    return await this.deleteCityCommand.execute(params)
  }
}
