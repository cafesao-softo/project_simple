import { DataSource } from "typeorm"
import { Injectable } from "@nestjs/common"
import { StateMapper } from "./mapper/state.mapper"
import { IReadStateRepository } from "src/domain/repositories/read-state.repository"

@Injectable()
export class ReadStateRepository implements IReadStateRepository {
  constructor(private readonly connection: DataSource) {}

  public async execute(params: IReadStateRepository.Params) {
    const repository = this.connection.getRepository(StateMapper)
    return await repository.findOne({
      where: { id: params.id },
      relations: {
        city: {
          district: true
        }
      }
    })
  }
}
