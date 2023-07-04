import { DataSource } from "typeorm"

export const DeleteDistrictProvider = [
  {
    provide: "connection",
    useValue: DataSource
  }
]
