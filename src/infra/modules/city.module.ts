import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { CityMapper } from "src/infra/repositories/typeorm/mapper/city.mapper"
import { CityController } from "../../application/controllers/city.controller"
import { DeleteCityCommand } from "src/application/commands/delete-city.command"
import { ReadCityRepository } from "../repositories/typeorm/read-city.repository"
import { UpdateCityRepository } from "../repositories/typeorm/update-city.repository"
import { DeleteCityRepository } from "../repositories/typeorm/delete-city.repository"
import { ReadCityQuery } from "src/application/queries/read-city.query"
import { UpdateCityCommand } from "src/application/commands/update-city.command"

@Module({
  imports: [TypeOrmModule.forFeature([CityMapper])],
  controllers: [CityController],
  providers: [
    ReadCityQuery,
    UpdateCityCommand,
    DeleteCityCommand,
    ReadCityRepository,
    UpdateCityRepository,
    DeleteCityRepository
  ],
  exports: [
    ReadCityQuery,
    UpdateCityCommand,
    DeleteCityCommand,
    ReadCityRepository,
    UpdateCityRepository,
    DeleteCityRepository
  ]
})
export class CityModule {}
