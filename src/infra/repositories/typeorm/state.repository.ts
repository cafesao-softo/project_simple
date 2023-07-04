import { StateEntity } from "src/domain/entities/state.entity"
import { IStateRepository } from "src/domain/repositories/state.repository"
import { DataSource } from "typeorm"
import { StateMapper } from "./mapper/state.mapper"
import { Injectable } from "@nestjs/common"

@Injectable()
export class StateRepository implements IStateRepository {
  constructor(private readonly connection: DataSource) {}

  async create(data: StateEntity): Promise<boolean> {
    const repository = this.connection.getRepository(StateMapper)
    await repository.save({
      id: data.getState().id
    })
    return true
  }

  async findOne(data: IStateRepository.FindOne): Promise<StateEntity> {
    const repository = this.connection.getRepository(StateMapper)
    const fetch = await repository.findOne({
      where: { id: data.id },
      relations: {
        cities: {
          districts: true
        }
      }
    })

    if (!fetch) return new StateEntity()

    return new StateEntity({
      id: fetch.id,
      name: fetch.name,
      cities: fetch.cities.map((city) => {
        return {
          id: city.id,
          name: city.name,
          districts: city.districts.map((district) => {
            return {
              id: district.id,
              name: district.name
            }
          })
        }
      })
    })
  }

  async findWithName(
    params: IStateRepository.FindWithName
  ): Promise<StateEntity> {
    const repository = this.connection.getRepository(StateMapper)
    const fetch = await repository.findOne({
      where: { name: params.name },
      relations: {
        cities: true
      }
    })

    return new StateEntity({
      id: fetch.id,
      name: fetch.name,
      cities: fetch.cities.map((city) => {
        return {
          id: city.id,
          name: city.name,
          districts: city.districts.map((district) => {
            return {
              id: district.id,
              name: district.name
            }
          })
        }
      })
    })
  }

  async update(
    query: IStateRepository.UpdateQuery,
    body: IStateRepository.UpdateBody
  ): Promise<boolean> {
    const repository = this.connection.getRepository(StateMapper)
    const data = await repository.findOne({
      where: { id: query.id },
      relations: {
        cities: true
      }
    })
    if (data) {
      data.name = body.name
      repository.save(data)
      return true
    }
  }

  async delete(data: IStateRepository.Delete): Promise<boolean> {
    const repository = this.connection.getRepository(StateMapper)
    await repository.delete({ id: data.id })
    return true
  }
}
