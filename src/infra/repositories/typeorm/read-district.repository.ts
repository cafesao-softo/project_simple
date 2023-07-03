import { DataSource } from "typeorm"
import { Injectable } from "@nestjs/common"
import { DistrictMapper } from "./mapper/district.mapper"
import { IReadDistrictRepository } from "src/domain/repositories/read-district.repository"

@Injectable()
export class ReadDistrictRepository implements IReadDistrictRepository {
  constructor(private readonly connection: DataSource) {}
  public async execute(params: IReadDistrictRepository.Params) {
    const repository = this.connection.getRepository(DistrictMapper)
    return await repository.findOne({
      where: { id: params.id },
      relations: {
        city: {
          state: true
        }
      }
    })
  }
}
