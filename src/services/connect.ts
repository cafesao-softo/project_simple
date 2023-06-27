import "reflect-metadata"
import { DataSource } from "typeorm"
import { DistrictModel } from "../models/District"
import { CityModel } from "../models/City"
import { StateModel } from "../models/State"

const AppDataSource = new DataSource({
  type: "mysql",
  host: process.env.Node_ENV === "dev" ? "localhost" : "db",
  port: Number(process.env.MYSQL_PORT),
  username: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
  entities: [DistrictModel, CityModel, StateModel],
  synchronize: true,
  logging: false
})

export { AppDataSource }
