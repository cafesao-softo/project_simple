import { Injectable } from "@nestjs/common"
import { ReadStateParamsDTO } from "src/domain/dto/read-state.dto"
import { CityEntity } from "src/domain/entities/city.entity"
import { DistrictEntity } from "src/domain/entities/district.entity"
import { StateEntity } from "src/domain/entities/state.entity"
import { IReadStateRepository } from "src/domain/repositories/read-state.repository"
import { ReadStateRepository } from "src/infra/repositories/typeorm/read-state.repository"

@Injectable()
export class ReadStateCommand {
  constructor(private readonly readStateRepository: ReadStateRepository) {}

  async execute(params: ReadStateParamsDTO) {
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

export namespace ReadStateCommand {
  export type Params = StateEntity.Read
}
