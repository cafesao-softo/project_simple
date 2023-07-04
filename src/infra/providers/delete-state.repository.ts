import { DataSource } from "typeorm"

export const DeleteStateProvider = [
  {
    provide: "connection",
    useValue: DataSource
  }
]
