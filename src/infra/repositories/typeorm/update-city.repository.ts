import { Injectable } from "@nestjs/common"
import { DataSource } from "typeorm"
import { CityMapper } from "./mapper/city.mapper"
import { IUpdateCityRepository } from "src/domain/repositories/update-city.repository"

@Injectable()
export class UpdateCityRepository implements IUpdateCityRepository {
  constructor(private readonly connection: DataSource) {}
  public async execute(
    params: IUpdateCityRepository.Params,
    body: IUpdateCityRepository.Body
  ) {
    const repository = this.connection.getRepository(CityMapper)
    const data = await repository.findOne({
      where: { id: params.id },
      relations: {
        state: true,
        district: true
      }
    })
    if (data) {
      data.name = body.name
      repository.save(data)
      return true
    }
  }
}
