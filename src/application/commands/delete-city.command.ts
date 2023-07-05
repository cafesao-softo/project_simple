import { Inject, Injectable } from "@nestjs/common"
import { CityEntity } from "src/domain/entities/city.entity"
import { ICityRepository } from "src/domain/repositories/city.repository"
import { IDeleteCityCommand } from "./contracts/delete-city.contracts"

@Injectable()
export class DeleteCityCommand implements IDeleteCityCommand {
  constructor(
    @Inject("CityRepository") private readonly cityRepository: ICityRepository
  ) {}

  async execute(params: DeleteCityCommand.Params) {
    await this.cityRepository.delete({
      id: params.id
    })
    return true
  }
}

export namespace DeleteCityCommand {
  export type Params = CityEntity.Delete
}
