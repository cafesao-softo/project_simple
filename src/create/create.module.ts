import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { CreateService } from "./services/create.service"
import { CreateController } from "./create.controller"
import { CityModule } from "src/city/city.module"
import { StateModule } from "src/state/state.module"

@Module({
  imports: [TypeOrmModule.forFeature(), StateModule, CityModule],
  controllers: [CreateController],
  providers: [CreateService]
})
export class CreateModule {}
