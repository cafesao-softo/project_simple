import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { CityMapper } from "src/infra/repositories/typeorm/mapper/city.mapper"
import { CityController } from "../controllers/city.controller"
import { DeleteCityCommand } from "src/application/commands/delete-city.command"
import { ReadCityQuery } from "src/application/queries/read-city.query"
import { UpdateCityCommand } from "src/application/commands/update-city.command"
import { CityRepository } from "../repositories/typeorm/city.repository"
import { UUIDAdapter } from "../cryptos/uuid"

@Module({
  imports: [TypeOrmModule.forFeature([CityMapper])],
  controllers: [CityController],
  providers: [
    {
      provide: "CityRepository",
      useClass: CityRepository
    },
    { provide: "UUIDAdapter", useClass: UUIDAdapter },
    ReadCityQuery,
    UpdateCityCommand,
    DeleteCityCommand
  ],
  exports: [
    {
      provide: "CityRepository",
      useClass: CityRepository
    },
    { provide: "UUIDAdapter", useClass: UUIDAdapter },
    ReadCityQuery,
    UpdateCityCommand,
    DeleteCityCommand
  ]
})
export class CityModule {}
