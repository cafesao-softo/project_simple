import { DataSource } from "typeorm"

export const ReadStateProvider = [
  {
    provide: "connection",
    useValue: DataSource
  }
]
