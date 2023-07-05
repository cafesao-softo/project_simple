import {
  Provider,
  ClassProvider,
  ServiceUnavailableException,
  FactoryProvider
} from "@nestjs/common"
import { SharedProviderEnum } from "../constants/shared.cons"

import { IUUID } from "src/domain/cryptos/uuid"
import { UUIDAdapter } from "src/infra/cryptos/uuid"
import { TypeOrmConnectionAdapter } from "src/infra/database/connection.adapter"
import { IDatabaseConnection } from "src/infra/database/connection"

const databaseProvider: FactoryProvider<IDatabaseConnection> = {
  provide: SharedProviderEnum.DatabaseConnection,
  useFactory: async (): Promise<IDatabaseConnection> => {
    try {
      const database = new TypeOrmConnectionAdapter()
      await database.connect()
      return database
    } catch (error) {
      throw new ServiceUnavailableException(error)
    }
  }
}

const uuidGeneratorProvider: ClassProvider<IUUID> = {
  provide: SharedProviderEnum.UUIDGenerator,
  useClass: UUIDAdapter
}

export const sharedProvider: Provider[] = [
  uuidGeneratorProvider,
  databaseProvider
]
