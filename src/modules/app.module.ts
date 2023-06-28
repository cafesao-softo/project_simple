import { Module } from "@nestjs/common"
import { HealthcheckController } from "../controllers/healthcheck.controller"
import { StateController } from "../controllers/state.controller"
import { CityController } from "../controllers/city.controller"
import { DistrictController } from "../controllers/district.controller"
import { AppService } from "../services/app.service"
import { ConfigModule } from "@nestjs/config"
import { TypeOrmModule } from "@nestjs/typeorm"
import { DistrictModel } from "src/models/District"
import { CityModel } from "src/models/City"
import { StateModel } from "src/models/State"
import { CreateController } from "src/controllers/create.controller"

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
      entities: [DistrictModel, CityModel, StateModel],
      synchronize: true,
      logging: false,
      autoLoadEntities: true
    })
  ],
  controllers: [
    CreateController,
    HealthcheckController,
    StateController,
    CityController,
    DistrictController
  ],
  providers: [AppService]
})
export class AppModule {}
