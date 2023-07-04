import { DataSource } from "typeorm"

export const UpdateDistrictProvider = [
  {
    provide: "connection",
    useValue: DataSource
  }
]
