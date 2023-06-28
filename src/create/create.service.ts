import { Injectable } from "@nestjs/common"
import { DataSource } from "typeorm"

@Injectable()
export class CreateService {
  constructor(private dataSource: DataSource) {}
  public async create(data: any) {
    await this.dataSource.manager.save(data)
    return true
  }
}
