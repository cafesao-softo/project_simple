import { DataSource } from "typeorm"
import { Injectable } from "@nestjs/common"
import { IReadStateWithNameRepository } from "src/domain/repositories/read-state-with-name.repository"
import { StateMapper } from "./mapper/state.mapper"

@Injectable()
export class ReadStateWithNameRepository
  implements IReadStateWithNameRepository
{
  constructor(private readonly connection: DataSource) {}

  public async execute(params: IReadStateWithNameRepository.Params) {
    const repository = this.connection.getRepository(StateMapper)
    return await repository.findOne({
      where: { name: params.name },
      relations: {
        city: {
          district: true
        }
      }
    })
  }
}
