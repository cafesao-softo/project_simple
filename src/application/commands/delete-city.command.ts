import { CityEntity } from "src/domain/entities/city.entity"
import { IDeleteCityRepository } from "src/domain/repositories/delete-city.repository"

export class DeleteCityCommand {
  constructor(private readonly deleteCityRepository: IDeleteCityRepository) {}

  async execute(params: DeleteCityCommand.Params) {
    await this.deleteCityRepository.execute({
      id: params.id
    })
  }
}

export namespace DeleteCityCommand {
  export type Params = CityEntity.Delete
}
