import { IUUID } from "src/domain/cryptos/uuid"
import { v4 as uuid } from "uuid"

export class UUIDAdapter implements IUUID {
  generate(): string {
    return uuid()
  }
}
