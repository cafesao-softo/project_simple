import { DataSource } from "typeorm"
import { IDatabaseConnection } from "./connection"
import { StateMapper } from "../repositories/typeorm/mapper/state.mapper"
import { CityMapper } from "../repositories/typeorm/mapper/city.mapper"
import { DistrictMapper } from "../repositories/typeorm/mapper/district.mapper"

export class TypeOrmConnectionAdapter
  implements IDatabaseConnection<DataSource>
{
  private dataSource: DataSource

  isInitialized(): boolean {
    return this.dataSource?.isInitialized
  }

  async connect(): Promise<void> {
    try {
      const connection = new DataSource({
        type: "mysql",
        logging: false,
        dropSchema: false,
        migrationsRun: false,
        entities: [StateMapper, CityMapper, DistrictMapper],
        host: process.env.Node_ENV === "dev" ? "localhost" : "db",
        port: Number(process.env.MYSQL_PORT),
        username: process.env.MYSQL_USER,
        password: process.env.MYSQL_PASSWORD,
        database: process.env.MYSQL_DATABASE
      })
      this.dataSource = await connection.initialize()
    } catch (error) {
      throw new Error("error connection database")
    }
  }

  getConnection(): DataSource {
    return this.dataSource
  }
}
