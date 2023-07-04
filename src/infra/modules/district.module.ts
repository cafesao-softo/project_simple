import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { DistrictController } from "../../application/controllers/district.controller"
import { DistrictMapper } from "src/infra/repositories/typeorm/mapper/district.mapper"
import { ReadDistrictRepository } from "../repositories/typeorm/read-district.repository"
import { UpdateDistrictRepository } from "../repositories/typeorm/update-district.repository"
import { DeleteDistrictRepository } from "../repositories/typeorm/delete-district.repository"
import { ReadDistrictQuery } from "src/application/queries/read-district.query"
import { UpdateDistrictCommand } from "src/application/commands/update-district.command"
import { DeleteDistrictCommand } from "src/application/commands/delete-district.command"

@Module({
  imports: [TypeOrmModule.forFeature([DistrictMapper])],
  controllers: [DistrictController],
  providers: [
    ReadDistrictQuery,
    UpdateDistrictCommand,
    DeleteDistrictCommand,
    ReadDistrictRepository,
    UpdateDistrictRepository,
    DeleteDistrictRepository
  ],
  exports: [
    ReadDistrictQuery,
    UpdateDistrictCommand,
    DeleteDistrictCommand,
    ReadDistrictRepository,
    UpdateDistrictRepository,
    DeleteDistrictRepository
  ]
})
export class DistrictModule {}
