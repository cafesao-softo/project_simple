import { Global, Module } from "@nestjs/common"

import { CreateController } from "../../controllers/create.controller"
import { StateController } from "../../controllers/state.controller"
import { CityController } from "../../controllers/city.controller"
import { DistrictController } from "../../controllers/district.controller"
import { geoProviders } from "../providers/geo.providers"

@Global()
@Module({
  providers: geoProviders,
  exports: geoProviders,
  controllers: [
    CreateController,
    StateController,
    CityController,
    DistrictController
  ]
})
export class GeoModule {}
