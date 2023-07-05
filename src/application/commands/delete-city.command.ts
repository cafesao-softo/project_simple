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
    const city = await this.cityRepository.findOne({
      id: params.id
    })
    city.existsOrFail()
    city.delete()
    city.getState().districts.forEach((district) => district.delete())
    await this.cityRepository.save(city)
    return true
  }
}

export namespace DeleteCityCommand {
  export type Params = CityEntity.Delete
}
