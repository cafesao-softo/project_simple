import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { StateMapper } from "src/infra/repositories/typeorm/mapper/state.mapper"
import { StateController } from "../controllers/state.controller"
import { ReadStateQuery } from "src/application/queries/read-state.query"
import { UpdateStateCommand } from "src/application/commands/update-state.command"
import { DeleteStateCommand } from "src/application/commands/delete-state.command"
import { StateRepository } from "../repositories/typeorm/state.repository"
import { UUIDAdapter } from "../cryptos/uuid"
@Module({
  imports: [TypeOrmModule.forFeature([StateMapper])],
  providers: [
    {
      provide: "StateRepository",
      useClass: StateRepository
    },
    { provide: "UUIDAdapter", useClass: UUIDAdapter },
    UpdateStateCommand,
    DeleteStateCommand,
    ReadStateQuery
  ],
  controllers: [StateController],
  exports: [
    {
      provide: "StateRepository",
      useClass: StateRepository
    },
    { provide: "UUIDAdapter", useClass: UUIDAdapter },
    UpdateStateCommand,
    DeleteStateCommand,
    ReadStateQuery
  ]
})
export class StateModule {}
