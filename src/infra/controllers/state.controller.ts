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
import { StateEntity } from "src/domain/entities/state.entity"
import { IReadStateParamsDTO } from "src/domain/dto/read-state.dto"
import {
  IUpdateStateBodyDTO,
  IUpdateStateParamsDTO
} from "src/domain/dto/update-state.dto"
import { IDeleteStateParamsDTO } from "src/domain/dto/delete-state.dto"
import { transformLowercase } from "src/infra/pipes/transformLowercase.pipe"
import { IReadStateQuery } from "src/application/queries/contracts/read-state.query"
import { IUpdateStateCommand } from "src/application/commands/contracts/update-state.contracts"
import { IDeleteStateCommand } from "src/application/commands/contracts/delete-state.contracts"
import { IReadAllStateQuery } from "src/application/queries/contracts/read-all-state.query"
import { GeoProviderEnum } from "../ioc/providers/geo.const"
import { ICreateStateCommand } from "src/application/commands/contracts/create-state.contracts"

@ApiTags("States")
@Controller("states")
export class StateController {
  constructor(
    @Inject(GeoProviderEnum.CreateStateCommand)
    private readonly createStateCommand: ICreateStateCommand,
    @Inject("ReadAllStateQuery")
    private readonly readAllStateQuery: IReadAllStateQuery,
    @Inject("ReadStateQuery")
    private readonly readStateQuery: IReadStateQuery,
    @Inject("UpdateStateCommand")
    private readonly updateStateCommand: IUpdateStateCommand,
    @Inject("DeleteStateCommand")
    private readonly deleteStateCommand: IDeleteStateCommand
  ) {}

  @Get("/")
  @ApiOperation({
    description: "Get all states"
  })
  async readAll(): Promise<StateEntity[]> {
    return await this.readAllStateQuery.execute()
  }

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
