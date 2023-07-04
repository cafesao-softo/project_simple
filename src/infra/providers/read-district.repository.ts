import { DataSource } from "typeorm"

export const ReadDistrictProvider = [
  {
    provide: "connection",
    useValue: DataSource
  }
]
