import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"
import { DataSource } from "typeorm"

import { AppController } from "./app.controler"
import { DistrictMapper } from "./infra/repositories/typeorm/mapper/district.mapper"
import { CityMapper } from "./infra/repositories/typeorm/mapper/city.mapper"
import { StateMapper } from "./infra/repositories/typeorm/mapper/state.mapper"
import { StateModule } from "./infra/modules/state.module"
import { CityModule } from "./infra/modules/city.module"
import { DistrictModule } from "./infra/modules/district.module"
import { CreateModule } from "./infra/modules/create.module"
import { SharedModule } from "./infra/ioc/shared.module"
import { GeoModule } from "./infra/ioc/geo.module"

@Module({
  imports: [
    ConfigModule.forRoot(),
    SharedModule,
    GeoModule,
    StateModule,
    CityModule,
    DistrictModule,
    CreateModule
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
