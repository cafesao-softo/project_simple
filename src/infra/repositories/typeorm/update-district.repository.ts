import { DataSource } from "typeorm"
import { Injectable } from "@nestjs/common"
import { DistrictMapper } from "./mapper/district.mapper"
import { IUpdateDistrictRepository } from "src/domain/repositories/update-district.repository"

@Injectable()
export class UpdateDistrictRepository implements IUpdateDistrictRepository {
  constructor(private readonly connection: DataSource) {}

  public async execute(
    params: IUpdateDistrictRepository.Params,
    body: IUpdateDistrictRepository.Body
  ) {
    const repository = this.connection.getRepository(DistrictMapper)
    const data = await repository.findOne({
      where: { id: params.id },
      relations: {
        city: {
          state: true
        }
      }
    })
    if (data) {
      data.name = body.name
      repository.save(data)
      return true
    }
  }
}
