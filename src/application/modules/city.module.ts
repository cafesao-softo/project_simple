import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { CityMapper } from "src/infra/repositories/typeorm/mapper/city.mapper"
import { CityController } from "../controllers/city.controller"
import { ReadCityService } from "src/infra/repositories/typeorm/read-city.repository"
import { UpdateCityService } from "src/infra/repositories/typeorm/update-city.repository"
import { DeleteCityService } from "src/infra/repositories/typeorm/delete-city.repository"

@Module({
  imports: [TypeOrmModule.forFeature([CityMapper])],
  controllers: [CityController],
  providers: [ReadCityService, UpdateCityService, DeleteCityService],
  exports: [ReadCityService, UpdateCityService, DeleteCityService]
})
export class CityModule {}
