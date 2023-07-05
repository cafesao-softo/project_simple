import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { StateModule } from "./state.module"
import { CityModule } from "./city.module"
import { CreateController } from "../controllers/create.controller"
import { UUIDAdapter } from "../cryptos/uuid"
import { StateRepository } from "../repositories/typeorm/state.repository"
import { CityRepository } from "../repositories/typeorm/city.repository"
import { DistrictRepository } from "../repositories/typeorm/district.repository"
import { CreateStateCommand } from "src/application/commands/create-state.command"
import { CreateCityCommand } from "src/application/commands/create-city.command"
import { CreateDistrictCommand } from "src/application/commands/create-district.command"

@Module({
  imports: [TypeOrmModule.forFeature(), StateModule, CityModule],
  controllers: [CreateController],
  providers: [
    { provide: "StateRepository", useClass: StateRepository },
    { provide: "CityRepository", useClass: CityRepository },
    { provide: "DistrictRepository", useClass: DistrictRepository },
    { provide: "UUIDAdapter", useClass: UUIDAdapter },
    { provide: "CreateStateCommand", useClass: CreateStateCommand },
    { provide: "CreateCityCommand", useClass: CreateCityCommand },
    { provide: "CreateDistrictCommand", useClass: CreateDistrictCommand }
  ]
})
export class CreateModule {}
