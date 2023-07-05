import { Inject, Injectable } from "@nestjs/common"
import { IUUID } from "src/domain/cryptos/uuid"
import { CityEntity } from "src/domain/entities/city.entity"
import { ICityRepository } from "src/domain/repositories/city.repository"
import { ICreateCityCommand } from "./contracts/create-city.contracts"

@Injectable()
export class CreateCityCommand implements ICreateCityCommand {
  constructor(
    @Inject("CityRepository") private readonly cityRepository: ICityRepository,
    @Inject("UUIDAdapter") private readonly uuidAdapter: IUUID
  ) {}

  async execute(params: ICreateCityCommand.Params) {
    const entity = new CityEntity({
      id: params.id ? params.id : this.uuidAdapter.generate(),
      name: params.name,
      stateId: params.stateId
    })
    await this.cityRepository.save(entity)
    return entity
  }
}
