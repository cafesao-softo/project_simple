import { Injectable } from "@nestjs/common"
import { DataSource } from "typeorm"
import { ICreateRepositoy } from "src/domain/repositories/create.repository"

@Injectable()
export class CreateRepository implements ICreateRepositoy {
  constructor(private dataSource: DataSource) {}
  public async execute(params: ICreateRepositoy.Params) {
    await this.dataSource.manager.save(params.data)
    return true
  }
}
