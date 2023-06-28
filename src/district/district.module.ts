import { Module } from "@nestjs/common"
import { TypeOrmModule } from "@nestjs/typeorm"
import { District } from "./district.entity"
import { DistrictController } from "./district.controller"
import { DistrictService } from "./district.service"

@Module({
  imports: [TypeOrmModule.forFeature([District])],
  controllers: [DistrictController],
  providers: [DistrictService],
  exports: [DistrictService]
})
export class DistrictModule {}
