import { Body, Controller, Delete, Get, Param, Put } from "@nestjs/common"
import { ApiOperation, ApiTags } from "@nestjs/swagger"
import { StateEntity } from "src/domain/entities/state.entity"
import { IReadStateParamsDTO } from "src/domain/dto/read-state.dto"
import {
  IUpdateStateBodyDTO,
  IUpdateStateParamsDTO
} from "src/domain/dto/update-state.dto"
import { IDeleteStateParamsDTO } from "src/domain/dto/delete-state.dto"
import { ReadStateQuery } from "../../application/queries/read-state.query"
import { UpdateStateCommand } from "../../application/commands/update-state.command"
import { DeleteStateCommand } from "../../application/commands/delete-state.command"
import { transformLowercase } from "src/infra/pipes/transformLowercase.pipe"

@ApiTags("States")
@Controller("states")
export class StateController {
  constructor(
    private readonly readStateQuery: ReadStateQuery,
    private readonly updateStateCommand: UpdateStateCommand,
    private readonly deleteStateCommand: DeleteStateCommand
  ) {}

  @Get("/:id")
  @ApiOperation({
    description: "Get a state by name"
  })
  async read(
    @Param(transformLowercase) params: IReadStateParamsDTO
  ): Promise<StateEntity | boolean> {
    return await this.readStateQuery.execute(params)
  }

  @Put("/:id")
  @ApiOperation({
    description: "Update a state by name"
  })
  async update(
    @Body() body: IUpdateStateBodyDTO,
    @Param(transformLowercase) query: IUpdateStateParamsDTO
  ) {
    return await this.updateStateCommand.execute({
      query,
      body
    })
  }

  @Delete("/:id")
  @ApiOperation({
    description: "Delete a state by name"
  })
  async delete(@Param(transformLowercase) params: IDeleteStateParamsDTO) {
    return await this.deleteStateCommand.execute(params)
  }
}
