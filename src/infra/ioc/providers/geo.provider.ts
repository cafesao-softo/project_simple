import { FactoryProvider, Provider } from '@nestjs/common';
import { ICreateCityCommand } from 'src/application/commands/contracts/create-city.contracts';
import { ICreateStateCommand } from 'src/application/commands/contracts/create-state.contracts';
import { CreateCityCommand } from 'src/application/commands/create-city.command';
import { CreateStateCommand } from 'src/application/commands/create-state.command';
import { IUUID } from 'src/domain/cryptos/uuid';
import { IStateRepository } from 'src/domain/repositories/state.repository';
import { StateRepositoryTypeORMAdapter } from 'src/infra/repositories/typeorm/state.repository';
import { GeoProviderEnum } from './geo.const';
import { SharedProviderEnum } from './shared.const';

const stateRepositoryProvider: FactoryProvider<IStateRepository> =
	{
		provide: GeoProviderEnum.StateRepository,
		useFactory: (connection: DatabaseConnection) =>
			new StateRepositoryTypeORMAdapter(connection.getConnection()),
		inject: [SharedProviderEnum.DatabaseConnection],
	};


const createStateCommandProvider: FactoryProvider<ICreateStateCommand> =
	{
		provide: GeoProviderEnum.StateRepository,
		useFactory: (
            stateRepository: IStateRepository,
            uuidGenerator: IUUID,
        ) =>
			new CreateStateCommand(stateRepository, uuidGenerator),
		inject: [
            GeoProviderEnum.StateRepository,
            SharedProviderEnum.UUIDGenerator
        ],
	};


export const geoProviders: Provider[] = [
    stateRepositoryProvider,
    createStateCommandProvider,
];
