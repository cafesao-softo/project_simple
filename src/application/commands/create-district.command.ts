import { Inject, Injectable } from "@nestjs/common"
import { IUUID } from "src/domain/cryptos/uuid"
import { DistrictEntity } from "src/domain/entities/district.entity"
import { IDistrictRepository } from "src/domain/repositories/district.repository"
import { ICreateDistrictCommand } from "./contracts/create-district.contracts"

@Injectable()
export class CreateDistrictCommand implements ICreateDistrictCommand {
  constructor(
    @Inject("DistrictRepository")
    private readonly districtRepository: IDistrictRepository,
    @Inject("UUIDAdapter")
    private readonly uuidAdapter: IUUID
  ) {}

  async execute(params: CreateDistrictCommand.Params) {
    const entity = new DistrictEntity({
      id: params.id ? params.id : this.uuidAdapter.generate(),
      name: params.name,
      cityId: params.cityId
    })
    await this.districtRepository.save(entity)
    return entity
  }
}

export namespace CreateDistrictCommand {
  export type Params = Partial<DistrictEntity.Create>
}
