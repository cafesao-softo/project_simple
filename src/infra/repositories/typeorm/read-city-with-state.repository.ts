import { DataSource } from "typeorm"
import { Injectable } from "@nestjs/common"
import { IReadCityWithStateRepository } from "src/domain/repositories/read-city-with-state.repository"
import { CityMapper } from "./mapper/city.mapper"

@Injectable()
export class ReadCityWithStateRepository
  implements IReadCityWithStateRepository
{
  constructor(private readonly connection: DataSource) {}

  public async execute(params: IReadCityWithStateRepository.Params) {
    const repository = this.connection.getRepository(CityMapper)
    return await repository.findOne({
      where: { name: params.cityName, state: { name: params.stateName } },
      relations: {
        state: true,
        district: true
      }
    })
  }
}
