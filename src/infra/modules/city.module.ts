import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { CityMapper } from "src/infra/repositories/typeorm/mapper/city.mapper"
import { CityController } from "../../application/controllers/city.controller"
import { ReadCityProvider } from "../providers/read-city.repository"
import { UpdateCityProvider } from "../providers/update-city.repository"
import { DeleteCityProvider } from "../providers/delete-city.repository"
import { ReadCityCommand } from "src/application/commands/read-city.commands"
import { UpdateCityCommand } from "src/application/commands/update-city.commands"
import { DeleteCityCommand } from "src/application/commands/delete-city.command"
import { ReadCityRepository } from "../repositories/typeorm/read-city.repository"
import { UpdateCityRepository } from "../repositories/typeorm/update-city.repository"
import { DeleteCityRepository } from "../repositories/typeorm/delete-city.repository"

@Module({
  imports: [TypeOrmModule.forFeature([CityMapper])],
  controllers: [CityController],
  providers: [
    ReadCityCommand,
    UpdateCityCommand,
    DeleteCityCommand,
    ReadCityRepository,
    UpdateCityRepository,
    DeleteCityRepository
    // ...ReadCityProvider,
    // ...UpdateCityProvider,
    // ...DeleteCityProvider
  ],
  exports: [
    ReadCityCommand,
    UpdateCityCommand,
    DeleteCityCommand,
    ReadCityRepository,
    UpdateCityRepository,
    DeleteCityRepository
    // ...ReadCityProvider,
    // ...UpdateCityProvider,
    // ...DeleteCityProvider
  ]
})
export class CityModule {}
