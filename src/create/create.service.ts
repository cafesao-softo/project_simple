import { Injectable } from "@nestjs/common"
import { DataSource } from "typeorm"
import { State } from "src/state/state.entity"
import { City } from "src/city/city.entity"
import { District } from "src/district/district.entity"

@Injectable()
export class CreateService {
  constructor(private dataSource: DataSource) {}
  public async create(data: State | City | District) {
    await this.dataSource.manager.save(data)
    return true
  }
}
