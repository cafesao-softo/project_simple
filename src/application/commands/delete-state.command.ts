import { Injectable } from "@nestjs/common"
import { IDeleteStateParamsDTO } from "src/domain/dto/delete-state.dto"
import { StateEntity } from "src/domain/entities/state.entity"
import { DeleteStateRepository } from "src/infra/repositories/typeorm/delete-state.repository"

@Injectable()
export class DeleteStateCommand {
  constructor(private readonly deleteStateRepository: DeleteStateRepository) {}

  async execute(params: IDeleteStateParamsDTO) {
    await this.deleteStateRepository.execute({
      id: params.id
    })
  }
}

export namespace DeleteStateCommand {
  export type Params = StateEntity.Delete
}
