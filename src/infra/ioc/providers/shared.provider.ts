import {
  FactoryProvider,
  Provider,
  ClassProvider,
  ServiceUnavailableException
} from '@nestjs/common';
import { SharedProviderEnum } from './shared.const';
import {
	DatabaseConnection,
	TypeOrmConnectionAdapter,
} from 'src/infra/database';

import { IUUID } from 'src/domain/cryptos/uuid';
import { UUIDAdapter } from 'src/infra/cryptos/uuid';

// - DATABASE
const databaseProvider: FactoryProvider<DatabaseConnection> = {
  provide: SharedProviderEnum.DatabaseConnection,
  useFactory: async (): Promise<DatabaseConnection> => {
    try {
      const database = new TypeOrmConnectionAdapter()
      await database.connect()
      return database
    } catch (error) {
      throw new ServiceUnavailableException(error)
    }
  }
};

const uuidGeneratorProvider: ClassProvider<IUUID> = {
	provide: SharedProviderEnum.UUIDGenerator,
	useClass: UUIDAdapter,
};

export const sharedProvider: Provider[] = [
	databaseProvider,
	uuidGeneratorProvider,
];
