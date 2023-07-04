import { DataSource } from "typeorm"
import { IDistrictRepository } from "src/domain/repositories/district.repository"
import { DistrictEntity } from "src/domain/entities/district.entity"
import { DistrictMapper } from "./mapper/district.mapper"
import { Injectable } from "@nestjs/common"

@Injectable()
export class DistrictRepository implements IDistrictRepository {
  constructor(private readonly connection: DataSource) {}

  async create(data: IDistrictRepository.Create): Promise<boolean> {
    const repository = this.connection.getRepository(DistrictMapper)
    await repository.save({
      id: data.getState().id,
      name: data.getState().name,
      cityId: data.getState().cityId
    })
    return true
  }

  async findOne(
    data: IDistrictRepository.FindOne
  ): Promise<DistrictEntity | false> {
    const repository = this.connection.getRepository(DistrictMapper)
    const fetch = await repository.findOne({
      where: { id: data.id },
      relations: {
        city: true
      }
    })

    if (!fetch) return new DistrictEntity()

    return new DistrictEntity({
      id: fetch.id,
      name: fetch.name,
      cityId: fetch.city.id
    })
  }

  async update(
    query: IDistrictRepository.UpdateQuery,
    body: IDistrictRepository.UpdateBody
  ): Promise<boolean> {
    const repository = this.connection.getRepository(DistrictMapper)
    const data = await repository.findOne({
      where: { id: query.id }
    })
    if (data) {
      data.name = body.name
      repository.save(data)
      return true
    }
  }

  async delete(data: IDistrictRepository.Delete): Promise<boolean> {
    const repository = this.connection.getRepository(DistrictMapper)
    await repository.delete({ id: data.id })
    return true
  }
}
