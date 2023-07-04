import { DataSource } from "typeorm"

export const UpdateStateProvider = [
  {
    provide: "connection",
    useValue: DataSource
  }
]
