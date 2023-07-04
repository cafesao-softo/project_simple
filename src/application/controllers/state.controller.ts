import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { ReadStateCommand } from "../commands/read-state.commands"
import { UpdateStateCommand } from "../commands/update-state.commands"
import { DeleteStateCommand } from "../commands/delete-state.commands"
import { transformLowercase } from "src/domain/pipes/transformLowercase.pipe"
import { StateEntity } from "src/domain/entities/state.entity"
import { ReadStateParamsDTO } from "src/domain/dto/read-state.dto"
import {
  UpdateStateBodyDTO,
  UpdateStateParamsDTO
} from "src/domain/dto/update-state.dto"
import { DeleteStateParamsDTO } from "src/domain/dto/delete-state.dto"

@ApiTags("States")
@Controller("states")
export class StateController {
  constructor(
    private readonly readStateCommand: ReadStateCommand,
    private readonly updateStateCommand: UpdateStateCommand,
    private readonly deleteStateCommand: DeleteStateCommand
  ) {}

  @Get("/:id")
  @ApiOperation({
    description: "Get a state by name"
  })
  async read(
    @Param(transformLowercase) params: ReadStateParamsDTO
  ): Promise<StateEntity | boolean> {
    return await this.readStateCommand.execute(params)
  }

  @Put("/:id")
  @ApiOperation({
    description: "Update a state by name"
  })
  async update(
    @Body() body: UpdateStateBodyDTO,
    @Param(transformLowercase) params: UpdateStateParamsDTO
  ) {
    return await this.updateStateCommand.execute(params, body)
  }

  @Delete("/:id")
  @ApiOperation({
    description: "Delete a state by name"
  })
  async delete(@Param(transformLowercase) params: DeleteStateParamsDTO) {
    return await this.deleteStateCommand.execute(params)
  }
}
