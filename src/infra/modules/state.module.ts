import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { StateMapper } from "src/infra/repositories/typeorm/mapper/state.mapper"
import { StateController } from "../../application/controllers/state.controller"
import { ReadStateRepository } from "../repositories/typeorm/read-state.repository"
import { UpdateStateRepository } from "../repositories/typeorm/update-state.repository"
import { DeleteStateRepository } from "../repositories/typeorm/delete-state.repository"
import { ReadStateQuery } from "src/application/queries/read-state.query"
import { UpdateStateCommand } from "src/application/commands/update-state.command"
import { DeleteStateCommand } from "src/application/commands/delete-state.command"
@Module({
  imports: [TypeOrmModule.forFeature([StateMapper])],
  providers: [
    ReadStateQuery,
    UpdateStateCommand,
    DeleteStateCommand,
    ReadStateRepository,
    UpdateStateRepository,
    DeleteStateRepository
  ],
  controllers: [StateController],
  exports: [
    ReadStateQuery,
    UpdateStateCommand,
    DeleteStateCommand,
    ReadStateRepository,
    UpdateStateRepository,
    DeleteStateRepository
  ]
})
export class StateModule {}
