import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { City } from "./city.entity"
import { CityController } from "./city.controller"
import { UpdateCityService } from "./services/update-city.service"
import { DeleteCityService } from "./services/delete-city.service"
import { ReadCityService } from "./services/read-city.service"

@Module({
  imports: [TypeOrmModule.forFeature([City])],
  controllers: [CityController],
  providers: [ReadCityService, UpdateCityService, DeleteCityService],
  exports: [ReadCityService, UpdateCityService, DeleteCityService]
})
export class CityModule {}
