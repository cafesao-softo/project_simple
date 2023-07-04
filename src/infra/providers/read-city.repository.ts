import { DataSource } from "typeorm"

export const ReadCityProvider = [
  {
    provide: "connection",
    useValue: DataSource
  }
]
