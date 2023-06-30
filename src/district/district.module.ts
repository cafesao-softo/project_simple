import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { District } from "./district.entity"
import { DistrictController } from "./district.controller"
import { UpdateDistrictService } from "./services/update-district.service"
import { DeleteDistrictService } from "./services/delete-district.service"
import { ReadDistrictService } from "./services/read-district.service"

@Module({
  imports: [TypeOrmModule.forFeature([District])],
  controllers: [DistrictController],
  providers: [
    ReadDistrictService,
    UpdateDistrictService,
    DeleteDistrictService
  ],
  exports: [ReadDistrictService, UpdateDistrictService, DeleteDistrictService]
})
export class DistrictModule {}
