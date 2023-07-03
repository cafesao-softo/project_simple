import { DistrictEntity } from "src/domain/entities/district.entity"
import { IReadDistrictRepository } from "src/domain/repositories/read-district.repository"

export class ReadDistrictCommand {
  constructor(
    private readonly readDistrictRepository: IReadDistrictRepository
  ) {}

  async execute(params: ReadDistrictCommand.Params) {
    await this.readDistrictRepository.execute({
      id: params.id
    })
  }
}

export namespace ReadDistrictCommand {
  export type Params = DistrictEntity.Read
}
