import { DataSource } from "typeorm"

export const DeleteCityProvider = [
  {
    provide: "connection",
    useValue: DataSource
  }
]
