import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { StateMapper } from "src/infra/repositories/typeorm/mapper/state.mapper"
import { StateController } from "../../application/controllers/state.controller"
import { ReadStateProvider } from "../providers/read-state.repository"
import { UpdateStateProvider } from "../providers/update-state.repository"
import { DeleteStateProvider } from "../providers/delete-state.repository"
import { ReadStateCommand } from "src/application/commands/read-state.commands"
import { UpdateStateCommand } from "src/application/commands/update-state.commands"
import { DeleteStateCommand } from "src/application/commands/delete-state.commands"
import { ReadStateRepository } from "../repositories/typeorm/read-state.repository"
import { UpdateStateRepository } from "../repositories/typeorm/update-state.repository"
import { DeleteStateRepository } from "../repositories/typeorm/delete-state.repository"
@Module({
  imports: [TypeOrmModule.forFeature([StateMapper])],
  providers: [
    ReadStateCommand,
    UpdateStateCommand,
    DeleteStateCommand,
    ReadStateRepository,
    UpdateStateRepository,
    DeleteStateRepository
    // ...ReadStateProvider,
    // ...UpdateStateProvider,
    // ...DeleteStateProvider
  ],
  controllers: [StateController],
  exports: [
    ReadStateCommand,
    UpdateStateCommand,
    DeleteStateCommand,
    ReadStateRepository,
    UpdateStateRepository,
    DeleteStateRepository
    // ...ReadStateProvider,
    // ...UpdateStateProvider,
    // ...DeleteStateProvider
  ]
})
export class StateModule {}
