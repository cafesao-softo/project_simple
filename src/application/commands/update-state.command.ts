import { Injectable } from "@nestjs/common"
import { DistrictEntity } from "src/domain/entities/district.entity"
import { IStateRepository } from "src/domain/repositories/state.repository"
import { IUpdateStateCommand } from "./contracts/update-state.contract"

@Injectable()
export class UpdateStateCommand implements IUpdateStateCommand {
  constructor(private stateRepository: IStateRepository) {}

  async execute(params: UpdateStateCommand.Params) {
    await this.stateRepository.update(
      {
        id: params.query.id
      },
      {
        name: params.body.name
      }
    )
    return true
  }
}

export namespace UpdateStateCommand {
  export type Params = {
    query: DistrictEntity.UpdateQuery
    body: DistrictEntity.UpdateBody
  }
}
