import { Injectable } from "@nestjs/common"
import {
  IUpdateStateBodyDTO,
  IUpdateStateParamsDTO
} from "src/domain/dto/update-state.dto"
import { DistrictEntity } from "src/domain/entities/district.entity"
import { UpdateStateRepository } from "src/infra/repositories/typeorm/update-state.repository"

@Injectable()
export class UpdateStateCommand {
  constructor(private readonly updateStateRepository: UpdateStateRepository) {}

  async execute(query: IUpdateStateParamsDTO, body: IUpdateStateBodyDTO) {
    await this.updateStateRepository.execute(
      {
        id: query.id
      },
      {
        name: body.name
      }
    )
  }
}

export namespace UpdateStateCommand {
  export type Params = {
    query: DistrictEntity.UpdateQuery
    body: DistrictEntity.UpdateBody
  }
}
