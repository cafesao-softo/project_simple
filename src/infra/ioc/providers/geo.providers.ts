import { FactoryProvider, Provider } from "@nestjs/common"

import { ICityRepository } from "src/domain/repositories/city.repository"
import { IDistrictRepository } from "src/domain/repositories/district.repository"
import { IStateRepository } from "src/domain/repositories/state.repository"
import { IDatabaseConnection } from "src/infra/database/connection"
import { StateRepository } from "src/infra/repositories/typeorm/state.repository"
import { CityRepository } from "src/infra/repositories/typeorm/city.repository"
import { DistrictRepository } from "src/infra/repositories/typeorm/district.repository"

import { GeoProviderEnum } from "../constants/geo.const"
import { SharedProviderEnum } from "../constants/shared.cons"
import { ICreateStateCommand } from "src/application/commands/contracts/create-state.contracts"
import { ICreateCityCommand } from "src/application/commands/contracts/create-city.contracts"
import { ICreateDistrictCommand } from "src/application/commands/contracts/create-district.contracts"
import { IUUID } from "src/domain/cryptos/uuid"
import { CreateStateCommand } from "src/application/commands/create-state.command"
import { CreateCityCommand } from "src/application/commands/create-city.command"
import { CreateDistrictCommand } from "src/application/commands/create-district.command"
import { IDeleteCityCommand } from "src/application/commands/contracts/delete-city.contracts"
import { IDeleteStateCommand } from "src/application/commands/contracts/delete-state.contracts"
import { IDeleteDistrictCommand } from "src/application/commands/contracts/delete-district.contracts"
import { DeleteStateCommand } from "src/application/commands/delete-state.command"
import { DeleteCityCommand } from "src/application/commands/delete-city.command"
import { DeleteDistrictCommand } from "src/application/commands/delete-district.command"
import { IUpdateStateCommand } from "src/application/commands/contracts/update-state.contracts"
import { IUpdateCityCommand } from "src/application/commands/contracts/update-city.contracts"
import { IUpdateDistrictCommand } from "src/application/commands/contracts/update-district.contracts"
import { UpdateStateCommand } from "src/application/commands/update-state.command"
import { UpdateCityCommand } from "src/application/commands/update-city.command"
import { UpdateDistrictCommand } from "src/application/commands/update-district.command"
import { IReadAllStateQuery } from "src/application/queries/contracts/read-all-state.query"
import { IReadStateQuery } from "src/application/queries/contracts/read-state.query"
import { IReadCityQuery } from "src/application/queries/contracts/read-city.query"
import { IReadDistrictQuery } from "src/application/queries/contracts/read-district.query"
import { ReadAllStateQuery } from "src/application/queries/read-all-state.query"
import { ReadStateQuery } from "src/application/queries/read-state.query"
import { ReadCityQuery } from "src/application/queries/read-city.query"
import { ReadDistrictQuery } from "src/application/queries/read-district.query"

const stateRepositoryProvider: FactoryProvider<IStateRepository> = {
  provide: GeoProviderEnum.StateRepository,
  useFactory: (databaseConnection: IDatabaseConnection) => {
    return new StateRepository(databaseConnection.getConnection())
  },
  inject: [SharedProviderEnum.DatabaseConnection]
}
const cityRepositoryProvider: FactoryProvider<ICityRepository> = {
  provide: GeoProviderEnum.CityRepository,
  useFactory: (databaseConnection: IDatabaseConnection) =>
    new CityRepository(databaseConnection.getConnection()),
  inject: [SharedProviderEnum.DatabaseConnection]
}
const districtRepositoryProvider: FactoryProvider<IDistrictRepository> = {
  provide: GeoProviderEnum.DistrictRepository,
  useFactory: (databaseConnection: IDatabaseConnection) =>
    new DistrictRepository(databaseConnection.getConnection()),
  inject: [SharedProviderEnum.DatabaseConnection]
}

const createStateCommandProvider: FactoryProvider<ICreateStateCommand> = {
  provide: GeoProviderEnum.CreateStateCommand,
  useFactory: (stateRepository: IStateRepository, uuidGenerator: IUUID) =>
    new CreateStateCommand(stateRepository, uuidGenerator),
  inject: [GeoProviderEnum.StateRepository, SharedProviderEnum.UUIDGenerator]
}

const createCityCommandProvider: FactoryProvider<ICreateCityCommand> = {
  provide: GeoProviderEnum.CreateCityCommand,
  useFactory: (cityRepository: ICityRepository, uuidGenerator: IUUID) =>
    new CreateCityCommand(cityRepository, uuidGenerator),
  inject: [GeoProviderEnum.CityRepository, SharedProviderEnum.UUIDGenerator]
}
const createDistrictCommandProvider: FactoryProvider<ICreateDistrictCommand> = {
  provide: GeoProviderEnum.CreateDistrictCommand,
  useFactory: (districtRepository: IDistrictRepository, uuidGenerator: IUUID) =>
    new CreateDistrictCommand(districtRepository, uuidGenerator),
  inject: [GeoProviderEnum.DistrictRepository, SharedProviderEnum.UUIDGenerator]
}

const deleteStateCommandProvider: FactoryProvider<IDeleteStateCommand> = {
  provide: GeoProviderEnum.DeleteStateCommand,
  useFactory: (stateRepository: IStateRepository) =>
    new DeleteStateCommand(stateRepository),
  inject: [GeoProviderEnum.StateRepository, SharedProviderEnum.UUIDGenerator]
}
const deleteCityCommandProvider: FactoryProvider<IDeleteCityCommand> = {
  provide: GeoProviderEnum.DeleteCityCommand,
  useFactory: (cityRepository: ICityRepository) =>
    new DeleteCityCommand(cityRepository),
  inject: [GeoProviderEnum.CityRepository, SharedProviderEnum.UUIDGenerator]
}
const deleteDistrictCommandProvider: FactoryProvider<IDeleteDistrictCommand> = {
  provide: GeoProviderEnum.DeleteDistrictCommand,
  useFactory: (districtRepository: IDistrictRepository) =>
    new DeleteDistrictCommand(districtRepository),
  inject: [GeoProviderEnum.DistrictRepository, SharedProviderEnum.UUIDGenerator]
}

const updateStateCommandProvider: FactoryProvider<IUpdateStateCommand> = {
  provide: GeoProviderEnum.UpdateStateCommand,
  useFactory: (stateRepository: IStateRepository) =>
    new UpdateStateCommand(stateRepository),
  inject: [GeoProviderEnum.StateRepository]
}
const updateCityCommandProvider: FactoryProvider<IUpdateCityCommand> = {
  provide: GeoProviderEnum.UpdateCityCommand,
  useFactory: (cityRepository: ICityRepository) =>
    new UpdateCityCommand(cityRepository),
  inject: [GeoProviderEnum.CityRepository]
}
const updateDistrictCommandProvider: FactoryProvider<IUpdateDistrictCommand> = {
  provide: GeoProviderEnum.UpdateDistrictCommand,
  useFactory: (districtRepository: IDistrictRepository) =>
    new UpdateDistrictCommand(districtRepository),
  inject: [GeoProviderEnum.DistrictRepository]
}

const readAllStateQueryProvider: FactoryProvider<IReadAllStateQuery> = {
  provide: GeoProviderEnum.ReadAllStateQuery,
  useFactory: (stateRepository: IStateRepository) =>
    new ReadAllStateQuery(stateRepository),
  inject: [GeoProviderEnum.StateRepository]
}
const readStateQueryProvider: FactoryProvider<IReadStateQuery> = {
  provide: GeoProviderEnum.ReadStateQuery,
  useFactory: (stateRepository: IStateRepository) =>
    new ReadStateQuery(stateRepository),
  inject: [GeoProviderEnum.StateRepository]
}
const readCityQueryProvider: FactoryProvider<IReadCityQuery> = {
  provide: GeoProviderEnum.ReadCityQuery,
  useFactory: (cityRepository: ICityRepository) =>
    new ReadCityQuery(cityRepository),
  inject: [GeoProviderEnum.CityRepository]
}
const readDistrictQueryProvider: FactoryProvider<IReadDistrictQuery> = {
  provide: GeoProviderEnum.ReadDistrictQuery,
  useFactory: (districtRepository: IDistrictRepository) =>
    new ReadDistrictQuery(districtRepository),
  inject: [GeoProviderEnum.DistrictRepository]
}

export const geoProviders: Provider[] = [
  stateRepositoryProvider,
  cityRepositoryProvider,
  districtRepositoryProvider,
  createStateCommandProvider,
  createCityCommandProvider,
  createDistrictCommandProvider,
  deleteStateCommandProvider,
  deleteCityCommandProvider,
  deleteDistrictCommandProvider,
  updateStateCommandProvider,
  updateCityCommandProvider,
  updateDistrictCommandProvider,
  readAllStateQueryProvider,
  readStateQueryProvider,
  readCityQueryProvider,
  readDistrictQueryProvider
]
