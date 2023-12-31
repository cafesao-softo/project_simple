import { DataSource } from "typeorm"
import { IDistrictRepository } from "src/domain/repositories/district.repository"
import { DistrictEntity } from "src/domain/entities/district.entity"
import { DistrictMapper } from "./mapper/district.mapper"
import { Injectable } from "@nestjs/common"
import { DistrictAssembler } from "../../../domain/assembler/district.assembler"

@Injectable()
export class DistrictRepository implements IDistrictRepository {
  constructor(private readonly connection: DataSource) {}

  async save(data: IDistrictRepository.Create): Promise<boolean> {
    const repository = this.connection.getRepository(DistrictMapper)
    await repository.save({
      id: data.getState().id,
      name: data.getState().name,
      cityId: data.getState().cityId
    })
    return true
  }

  async findOne(data: IDistrictRepository.FindOne): Promise<DistrictEntity> {
    const repository = this.connection.getRepository(DistrictMapper)
    const fetch = await repository.findOne({
      where: { id: data.id },
      relations: {
        city: true
      }
    })

    return DistrictAssembler.assembly(fetch)
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
    await repository.save({ id: data.id, deletaAt: new Date() })
    return true
  }
}
