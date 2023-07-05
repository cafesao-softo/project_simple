import { CityEntity } from "src/domain/entities/city.entity"
import { ICityRepository } from "src/domain/repositories/city.repository"
import { CityMapper } from "./mapper/city.mapper"
import { DataSource } from "typeorm"
import { Injectable } from "@nestjs/common"
import { CityAssembler } from "src/domain/assembler/city.assembler"

@Injectable()
export class CityRepository implements ICityRepository {
  constructor(private readonly connection: DataSource) {}

  async save(data: CityEntity): Promise<boolean> {
    const repository = this.connection.getRepository(CityMapper)

    await repository.save({
      id: data.getState().id,
      name: data.getState().name,
      stateId: data.getState().stateId
    })
    return true
  }

  async findOne(data: ICityRepository.FindOne): Promise<CityEntity> {
    const repository = this.connection.getRepository(CityMapper)
    const fetch = await repository.findOne({
      where: { id: data.id },
      relations: {
        districts: true,
        state: true
      }
    })

    return CityAssembler.assembly(fetch)
  }

  async findWithNameAndState(
    params: ICityRepository.FindWithNameAndState
  ): Promise<CityEntity> {
    const repository = this.connection.getRepository(CityMapper)
    const fetch = await repository.findOne({
      where: { name: params.cityName, state: { name: params.stateName } },
      relations: {
        districts: true,
        state: true
      }
    })

    return CityAssembler.assembly(fetch)
  }

  async update(
    query: ICityRepository.UpdateQuery,
    body: ICityRepository.UpdateBody
  ): Promise<boolean> {
    const repository = this.connection.getRepository(CityMapper)
    const data = await repository.findOne({
      where: { id: query.id },
      relations: {
        state: true,
        districts: true
      }
    })
    if (data) {
      data.name = body.name
      repository.save(data)
      return true
    }
  }

  async delete(data: ICityRepository.Delete): Promise<boolean> {
    const repository = this.connection.getRepository(CityMapper)
    await repository.delete({ id: data.id })
    return true
  }
}
