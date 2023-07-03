import { Injectable } from "@nestjs/common"
import { DataSource } from "typeorm"
import { CityMapper } from "./mapper/city.mapper"
import { IReadCityRepository } from "src/domain/repositories/read-city.repository"

@Injectable()
export class ReadCityRepository implements IReadCityRepository {
  constructor(private readonly connection: DataSource) {}
  public async execute(params: IReadCityRepository.Params) {
    const repository = this.connection.getRepository(CityMapper)
    return await repository.findOne({
      where: { id: params.id },
      relations: {
        state: true,
        district: true
      }
    })
  }
}
