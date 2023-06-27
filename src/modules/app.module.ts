import { Module } from "@nestjs/common"
import { HeathcheckController } from "../controllers/heathcheck.controller"
import { StateController } from "../controllers/state.controller"
import { CityController } from "../controllers/city.controller"
import { DistrictController } from "../controllers/district.controller"
import { AppService } from "../services/app.service"
import { ConfigModule } from "@nestjs/config"

@Module({
  imports: [ConfigModule.forRoot()],
  controllers: [
    HeathcheckController,
    StateController,
    CityController,
    DistrictController
  ],
  providers: [AppService]
})
export class AppModule {}
