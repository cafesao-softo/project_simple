import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"
import { DataSource } from "typeorm"

import { StateModule } from "./state/state.module"
import { CityModule } from "./city/city.module"
import { DistrictModule } from "./district/district.module"
import { AppController } from "./app.controler"
import { CreateModule } from "./create/create.module"
import { District } from "./district/district.entity"
import { City } from "./city/city.entity"
import { State } from "./state/state.entity"

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
      entities: [District, City, State],
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
