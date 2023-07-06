import { Injectable } from "@nestjs/common"
import { StateEntity } from "src/domain/entities/state.entity"
import { IStateRepository } from "src/domain/repositories/state.repository"

@Injectable()
export class ReadStateQuery {
  constructor(private readonly stateRepository: IStateRepository) {}

  async execute(params: ReadStateQuery.Params) {
    const data = await this.stateRepository.findOne({
      id: params.id
    })

    if (!data) {
      return false
    }

    return data
  }
}

export namespace ReadStateQuery {
  export type Params = StateEntity.Read
}
