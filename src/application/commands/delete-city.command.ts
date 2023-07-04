import { Injectable } from "@nestjs/common"
import { IDeleteCityParamsDTO } from "src/domain/dto/delete-city.dto"
import { CityEntity } from "src/domain/entities/city.entity"
import { DeleteCityRepository } from "src/infra/repositories/typeorm/delete-city.repository"

@Injectable()
export class DeleteCityCommand {
  constructor(private readonly deleteCityRepository: DeleteCityRepository) {}

  async execute(params: IDeleteCityParamsDTO) {
    await this.deleteCityRepository.execute({
      id: params.id
    })
  }
}

export namespace DeleteCityCommand {
  export type Params = CityEntity.Delete
}
