import { Injectable } from "@nestjs/common"
import { IDeleteDistrictParamsDTO } from "src/domain/dto/delete-district.dto"
import { DistrictEntity } from "src/domain/entities/district.entity"
import { DeleteDistrictRepository } from "src/infra/repositories/typeorm/delete-district.repository"

@Injectable()
export class DeleteDistrictCommand {
  constructor(
    private readonly deleteDistrictRepository: DeleteDistrictRepository
  ) {}

  async execute(params: IDeleteDistrictParamsDTO) {
    await this.deleteDistrictRepository.execute({
      id: params.id
    })
  }
}

export namespace DeleteDistrictCommand {
  export type Params = DistrictEntity.Delete
}
