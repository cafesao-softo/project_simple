import { UUIDManager } from "src/domain/cryptos/uuid"
import { v4 as uuid } from "uuid"

export class UUIDAdapter implements UUIDManager {
  generate(): string {
    return uuid()
  }
}
