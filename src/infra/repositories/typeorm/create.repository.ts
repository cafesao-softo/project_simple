import { Injectable } from "@nestjs/common"
import { DataSource } from "typeorm"
import { StateMapper } from "./mapper/state.mapper"
import { CityMapper } from "./mapper/city.mapper"
import { DistrictMapper } from "./mapper/district.mapper"

@Injectable()
export class CreateRepository {
  constructor(private dataSource: DataSource) {}
  public async execute(data: StateMapper | CityMapper | DistrictMapper) {
    await this.dataSource.manager.save(data)
    return true
  }
}
