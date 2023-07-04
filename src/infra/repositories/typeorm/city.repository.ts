import { CityEntity } from "src/domain/entities/city.entity"
import { ICityRepository } from "src/domain/repositories/city.repository"
import { CityMapper } from "./mapper/city.mapper"
import { DataSource } from "typeorm"
import { Injectable } from "@nestjs/common"

@Injectable()
export class CityRepository implements ICityRepository {
  constructor(private readonly connection: DataSource) {}

  async create(data: CityEntity): Promise<boolean> {
    const repository = this.connection.getRepository(CityMapper)
    await repository.save({
      id: data.getState().id,
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

    if (!fetch) return new CityEntity()

    return new CityEntity({
      id: fetch.id,
      name: fetch.name,
      stateId: fetch.state.id,
      districts: fetch.districts.map((district) => {
        return {
          id: district.id,
          name: district.name
        }
      })
    })
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

    return new CityEntity({
      id: fetch.id,
      name: fetch.name,
      stateId: fetch.state.id,
      districts: fetch.districts.map((district) => {
        return {
          id: district.id,
          name: district.name
        }
      })
    })
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
