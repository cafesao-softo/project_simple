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

@Module({
  imports: [
    ConfigModule.forRoot(),
    TypeOrmModule.forRoot({
      type: "mysql",
      host: process.env.Node_ENV === "dev" ? "localhost" : "db",
      port: Number(process.env.MYSQL_PORT),
      username: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE,
      entities: [DistrictMapper, CityMapper, StateMapper],
      synchronize: true,
      logging: false,
      autoLoadEntities: true
    }),
    StateModule,
    CityModule,
    DistrictModule,
    CreateModule
  ],
  controllers: [AppController],
  providers: []
})
export class AppModule {
  constructor(private readonly dataSource: DataSource) {}
}
