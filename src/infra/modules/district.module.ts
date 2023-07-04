import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { DistrictController } from "../../application/controllers/district.controller"
import { DistrictMapper } from "src/infra/repositories/typeorm/mapper/district.mapper"
import { ReadDistrictProvider } from "../providers/read-district.repository"
import { UpdateDistrictProvider } from "../providers/update-district.repository"
import { DeleteDistrictProvider } from "../providers/delete-district.repository"
import { ReadDistrictCommand } from "src/application/commands/read-district.commands"
import { UpdateDistrictCommand } from "src/application/commands/update-district.commands"
import { DeleteDistrictCommand } from "src/application/commands/delete-district.commands"
import { ReadDistrictRepository } from "../repositories/typeorm/read-district.repository"
import { UpdateDistrictRepository } from "../repositories/typeorm/update-district.repository"
import { DeleteDistrictRepository } from "../repositories/typeorm/delete-district.repository"

@Module({
  imports: [TypeOrmModule.forFeature([DistrictMapper])],
  controllers: [DistrictController],
  providers: [
    ReadDistrictCommand,
    UpdateDistrictCommand,
    DeleteDistrictCommand,
    ReadDistrictRepository,
    UpdateDistrictRepository,
    DeleteDistrictRepository
    // ...ReadDistrictProvider,
    // ...UpdateDistrictProvider,
    // ...DeleteDistrictProvider
  ],
  exports: [
    ReadDistrictCommand,
    UpdateDistrictCommand,
    DeleteDistrictCommand,
    ReadDistrictRepository,
    UpdateDistrictRepository,
    DeleteDistrictRepository
    // ...ReadDistrictProvider,
    // ...UpdateDistrictProvider,
    // ...DeleteDistrictProvider
  ]
})
export class DistrictModule {}
