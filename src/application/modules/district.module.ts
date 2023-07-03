import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { DistrictController } from "../controllers/district.controller"
import { ReadDistrictRepository } from "src/infra/repositories/typeorm/read-district.repository"
import { UpdateDistrictRepository } from "src/infra/repositories/typeorm/update-district.repository"
import { DeleteDistrictRepository } from "src/infra/repositories/typeorm/delete-district.repository"
import { DistrictMapper } from "src/infra/repositories/typeorm/mapper/district.mapper"

@Module({
  imports: [TypeOrmModule.forFeature([DistrictMapper])],
  controllers: [DistrictController],
  providers: [
    ReadDistrictRepository,
    UpdateDistrictRepository,
    DeleteDistrictRepository
  ],
  exports: [
    ReadDistrictRepository,
    UpdateDistrictRepository,
    DeleteDistrictRepository
  ]
})
export class DistrictModule {}
