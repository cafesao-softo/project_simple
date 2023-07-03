import { CityEntity } from "src/domain/entities/city.entity"
import { IUpdateCityRepository } from "src/domain/repositories/update-city.repository"

export class UpdateCityCommand {
  constructor(private readonly updateCityRepository: IUpdateCityRepository) {}

  async execute(params: UpdateCityCommand.Params) {
    await this.updateCityRepository.execute(
      {
        id: params.query.id
      },
      params.body
    )
  }
}

export namespace UpdateCityCommand {
  export type Params = {
    query: CityEntity.UpdateQuery
    body: CityEntity.UpdateBody
  }
}
