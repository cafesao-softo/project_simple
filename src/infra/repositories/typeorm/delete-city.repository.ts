import { Injectable } from "@nestjs/common"
import { DataSource } from "typeorm"
import { CityMapper } from "./mapper/city.mapper"
import { IDeleteCityRepository } from "src/domain/repositories/delete-city.repository"

@Injectable()
export class DeleteCityRepository implements IDeleteCityRepository {
  constructor(private readonly connection: DataSource) {}
  public async execute(params: IDeleteCityRepository.Params) {
    const repository = this.connection.getRepository(CityMapper)
    await repository.delete({ id: params.id })
    return true
  }
}
