import { CityEntity } from "src/domain/entities/city.entity"
import { IReadCityRepository } from "src/domain/repositories/read-city.repository"

export class ReadCityCommand {
  constructor(private readonly readCityRepository: IReadCityRepository) {}

  async execute(params: ReadCityCommand.Params) {
    await this.readCityRepository.execute({
      id: params.id
    })
  }
}

export namespace ReadCityCommand {
  export type Params = CityEntity.Read
}
