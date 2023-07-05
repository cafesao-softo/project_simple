import { Module } from "@nestjs/common"
import { ConfigModule } from "@nestjs/config"

import { AppController } from "./app.controler"
import { GeoModule } from "./infra/ioc/modules/geo.module"
import { SharedModule } from "./infra/ioc/modules/shared.module"

@Module({
  imports: [ConfigModule.forRoot(), SharedModule, GeoModule],
  controllers: [AppController],
  providers: []
})
export class AppModule {}
