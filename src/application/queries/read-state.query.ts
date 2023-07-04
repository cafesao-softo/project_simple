import { Inject, Injectable } from "@nestjs/common"
import { IReadStateParamsDTO } from "src/domain/dto/read-state.dto"
import { StateEntity } from "src/domain/entities/state.entity"
import { IStateRepository } from "src/domain/repositories/state.repository"

@Injectable()
export class ReadStateQuery {
  constructor(
    @Inject("StateRepository")
    private readonly stateRepository: IStateRepository
  ) {}

  async execute(params: IReadStateParamsDTO) {
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
