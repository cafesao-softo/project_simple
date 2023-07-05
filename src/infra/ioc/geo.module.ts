import { Global, Module } from '@nestjs/common'
import { geoProviders } from 'src/infra/ioc/providers/geo.provider'
import { CityController } from '../controllers/city.controller'
import { StateController } from '../controllers/state.controller'

@Global()
@Module({
	providers: geoProviders,
	exports: geoProviders,
	controllers: [
		StateController,
		CityController,
		// ...
	]
})
export class GeoModule {}
