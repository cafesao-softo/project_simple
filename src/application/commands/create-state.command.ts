import { Injectable } from "@nestjs/common"
import { UUIDManager } from "src/domain/cryptos/uuid"
import { CreateDTO } from "src/domain/dto/create.dto"
import { CityEntity } from "src/domain/entities/city.entity"
import { DistrictEntity } from "src/domain/entities/district.entity"
import { StateEntity } from "src/domain/entities/state.entity"
import { ICreateStateRepositoy } from "src/domain/repositories/create-state.repository"

@Injectable()
export class CreateStateCommand {
  constructor(
    private readonly createStateRepository: ICreateStateRepositoy,
    private readonly uuidManager: UUIDManager
  ) {}

  async execute(params: CreateDTO) {
    const state = new StateEntity().create({
      id: this.uuidManager.generate(),
      name: params.state.name,
      cities: new CityEntity().create({
        id: this.uuidManager.generate(),
        name: params.state.city.name,
        districts: [
          new DistrictEntity().create({
            id: this.uuidManager.generate(),
            name: params.state.city.district.name
          })
        ]
      })
    })
    await this.createStateRepository.execute(state)
  }
}

export namespace CreateStateCommand {
  export type Params = StateEntity.Create
}
