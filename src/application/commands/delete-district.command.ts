import { Inject, Injectable } from "@nestjs/common"
import { DistrictEntity } from "src/domain/entities/district.entity"
import { IDistrictRepository } from "src/domain/repositories/district.repository"
import { IDeleteDistrictCommand } from "./contracts/delete-district.contracts"

@Injectable()
export class DeleteDistrictCommand implements IDeleteDistrictCommand {
  constructor(private readonly districtRepository: IDistrictRepository) {}

  async execute(params: DeleteDistrictCommand.Params) {
    await this.districtRepository.delete({
      id: params.id
    })
    return true
  }
}

export namespace DeleteDistrictCommand {
  export type Params = DistrictEntity.Delete
}
