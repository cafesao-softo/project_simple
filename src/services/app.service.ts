import { Injectable } from "@nestjs/common"
import { StateModel } from "src/models/State"
import { CityModel } from "src/models/City"
import { DistrictModel } from "src/models/District"
import { DataSource, ObjectLiteral } from "typeorm"

@Injectable()
export class AppService implements IService {
  constructor(private dataSource: DataSource) {}
  public async create(data: any) {
    await this.dataSource.manager.save(data)
    return true
  }

  public async getState(value: string, relations: boolean) {
    const db = this.dataSource.getRepository(StateModel)
    return await db.findOne({
      where: { name: value },
      relations: relations
        ? {
            city: {
              district: true
            }
          }
        : {}
    })
  }

  public async getCity(value: string, relations: boolean) {
    const db = this.dataSource.getRepository(CityModel)
    return await db.findOne({
      where: { name: value },
      relations: relations
        ? {
            state: true,
            district: true
          }
        : {}
    })
  }

  public async getDistrict(value: string, relations: boolean) {
    const db = this.dataSource.getRepository(DistrictModel)
    return await db.findOne({
      where: { name: value },
      relations: relations
        ? {
            city: {
              state: true
            }
          }
        : {}
    })
  }
}
