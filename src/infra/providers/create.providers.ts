import { UUIDAdapter } from "../cryptos/uuid"
import { CreateRepository } from "../repositories/typeorm/create.repository"

export const CreateProvider = [
  {
    provide: "createRepository",
    useValue: CreateRepository
  },
  {
    provide: "uuidManager",
    useValue: UUIDAdapter
  }
]
