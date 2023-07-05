import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { DistrictController } from "../controllers/district.controller"
import { DistrictMapper } from "src/infra/repositories/typeorm/mapper/district.mapper"
import { ReadDistrictQuery } from "src/application/queries/read-district.query"
import { UpdateDistrictCommand } from "src/application/commands/update-district.command"
import { DeleteDistrictCommand } from "src/application/commands/delete-district.command"
import { DistrictRepository } from "../repositories/typeorm/district.repository"
import { UUIDAdapter } from "../cryptos/uuid"

@Module({
  imports: [TypeOrmModule.forFeature([DistrictMapper])],
  controllers: [DistrictController],
  providers: [
    {
      provide: "DistrictRepository",
      useClass: DistrictRepository
    },
    { provide: "UUIDAdapter", useClass: UUIDAdapter },
    { provide: "ReadDistrictQuery", useClass: ReadDistrictQuery },
    { provide: "UpdateDistrictCommand", useClass: UpdateDistrictCommand },
    { provide: "DeleteDistrictCommand", useClass: DeleteDistrictCommand }
  ],
  exports: [
    {
      provide: "DistrictRepository",
      useClass: DistrictRepository
    },
    { provide: "UUIDAdapter", useClass: UUIDAdapter },
    { provide: "ReadDistrictQuery", useClass: ReadDistrictQuery },
    { provide: "UpdateDistrictCommand", useClass: UpdateDistrictCommand },
    { provide: "DeleteDistrictCommand", useClass: DeleteDistrictCommand }
  ]
})
export class DistrictModule {}
