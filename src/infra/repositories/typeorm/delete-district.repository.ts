import { DataSource } from "typeorm"
import { Injectable } from "@nestjs/common"
import { DistrictMapper } from "./mapper/district.mapper"
import { IDeleteDistrictRepository } from "src/domain/repositories/delete-district.repository"

@Injectable()
export class DeleteDistrictRepository implements IDeleteDistrictRepository {
  constructor(private readonly connection: DataSource) {}

  public async execute(params: IDeleteDistrictRepository.Params) {
    const repository = this.connection.getRepository(DistrictMapper)
    await repository.delete({ id: params.id })
    return true
  }
}
