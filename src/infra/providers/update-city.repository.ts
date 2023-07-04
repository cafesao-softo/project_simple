import { DataSource } from "typeorm"

export const UpdateCityProvider = [
  {
    provide: "connection",
    useValue: DataSource
  }
]
