import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { StateModule } from "./state.module"
import { CityModule } from "./city.module"
import { CreateController } from "../../application/controllers/create.controller"
import { CreateRepository } from "../repositories/typeorm/create.repository"
import { ReadStateWithNameRepository } from "../repositories/typeorm/read-state-with-name.repository"
import { ReadCityWithStateRepository } from "../repositories/typeorm/read-city-with-state.repository"
import { UUIDAdapter } from "../cryptos/uuid"

@Module({
  imports: [TypeOrmModule.forFeature(), StateModule, CityModule],
  controllers: [CreateController],
  providers: [
    CreateRepository,
    ReadStateWithNameRepository,
    ReadCityWithStateRepository,
    UUIDAdapter
  ]
})
export class CreateModule {}
