import { Injectable } from "@nestjs/common"
import { StateModel } from "src/models/State"
import { CityModel } from "src/models/City"
import { DistrictModel } from "src/models/District"
import { DataSource } from "typeorm"

@Injectable()
export class AppService {
  constructor(private dataSource: DataSource) {}
  public async create(data: DistrictModel): Promise<IBody> {
    const districtDB = this.dataSource.getRepository(DistrictModel)
    const returnDB = await districtDB.save(data)
    const returnBody = {
      state: { name: returnDB.state.name },
      city: { name: returnDB.city.name },
      district: { name: returnDB.name }
    }
    return returnBody
  }
}
