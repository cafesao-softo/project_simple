import { Injectable } from "@nestjs/common"
import { DeleteStateParamsDTO } from "src/domain/dto/delete-state.dto"
import { StateEntity } from "src/domain/entities/state.entity"
import { IDeleteCityRepository } from "src/domain/repositories/delete-city.repository"
import { DeleteStateRepository } from "src/infra/repositories/typeorm/delete-state.repository"

@Injectable()
export class DeleteStateCommand {
  constructor(private readonly deleteStateRepository: DeleteStateRepository) {}

  async execute(params: DeleteStateParamsDTO) {
    await this.deleteStateRepository.execute({
      id: params.id
    })
  }
}

export namespace DeleteStateCommand {
  export type Params = StateEntity.Delete
}
