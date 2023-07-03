import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { DeleteStateRepository } from "src/infra/repositories/typeorm/delete-state.repository"
import { StateMapper } from "src/infra/repositories/typeorm/mapper/state.mapper"
import { ReadStateRepository } from "src/infra/repositories/typeorm/read-state.repository"
import { UpdateStateRepository } from "src/infra/repositories/typeorm/update-state.repository"
import { StateController } from "../controllers/state.controller"
@Module({
  imports: [TypeOrmModule.forFeature([StateMapper])],
  providers: [
    ReadStateRepository,
    UpdateStateRepository,
    DeleteStateRepository
  ],
  controllers: [StateController],
  exports: [ReadStateRepository, UpdateStateRepository, DeleteStateRepository]
})
export class StateModule {}
