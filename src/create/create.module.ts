import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { CreateService } from "./create.service"
import { CreateController } from "./create.controller"
import { CityModule } from "src/city/city.module"
import { StateModule } from "src/state/state.module"

@Module({
  imports: [TypeOrmModule.forFeature(), CityModule, StateModule],
  controllers: [CreateController],
  providers: [CreateService]
})
export class CreateModule {}