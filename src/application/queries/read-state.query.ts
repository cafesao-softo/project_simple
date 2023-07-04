import { Injectable } from "@nestjs/common"
import { IReadStateParamsDTO } from "src/domain/dto/read-state.dto"
import { CityEntity } from "src/domain/entities/city.entity"
import { DistrictEntity } from "src/domain/entities/district.entity"
import { StateEntity } from "src/domain/entities/state.entity"
import { ReadStateRepository } from "src/infra/repositories/typeorm/read-state.repository"

@Injectable()
export class ReadStateQuery {
  constructor(private readonly readStateRepository: ReadStateRepository) {}

  async execute(params: IReadStateParamsDTO) {
    const data = await this.readStateRepository.execute({
      id: params.id
    })

    if (!data) {
      return false
    }

    return new StateEntity().create({
      id: data.id,
      name: data.name,
      cities: data.city.map((city) => {
        return new CityEntity().create({
          id: city.id,
          name: city.name,
          districts: city.district.map((district) => {
            return new DistrictEntity().create({
              id: district.id,
              name: district.name
            })
          })
        })
      })
    })
  }
}

export namespace ReadStateQuery {
  export type Params = StateEntity.Read
}
