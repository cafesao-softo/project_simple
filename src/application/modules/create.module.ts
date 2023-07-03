import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { StateModule } from "./state.module"
import { CityModule } from "./city.module"
import { CreateController } from "../controllers/create.controller"
import { CreateStateRepositoy } from "src/infra/repositories/typeorm/create-state.repository"

@Module({
  imports: [TypeOrmModule.forFeature(), StateModule, CityModule],
  controllers: [CreateController],
  providers: [CreateStateRepositoy]
})
export class CreateModule {}
