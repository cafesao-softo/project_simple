import { Global, Module } from '@nestjs/common'
import { sharedProvider } from 'src/infra/ioc/providers/shared.provider'

@Global()
@Module({
	providers: sharedProvider,
	exports: sharedProvider,
})
export class SharedModule {}
