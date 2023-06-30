import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { State } from "./state.entity"
import { StateController } from "./state.controller"
import { UpdateStateService } from "./services/update-state.service"
import { DeleteStateService } from "./services/delete-state.service"
import { ReadStateService } from "./services/read-state.service"
@Module({
  imports: [TypeOrmModule.forFeature([State])],
  providers: [ReadStateService, UpdateStateService, DeleteStateService],
  controllers: [StateController],
  exports: [ReadStateService, UpdateStateService, DeleteStateService]
})
export class StateModule {}
