import { ICreateCommand } from "src/application/commands/contracts/create-command.contract";
import { IUUID } from "src/domain/cryptos/uuid";
import { StateEntity } from "src/domain/entities/state.entity";
import { IStateRepository } from "src/domain/repositories/state.repository";

export class CreateCommand implements ICreateCommand {
  constructor(
    private readonly stateRepository: IStateRepository,
    private readonly uuidManager: IUUID
  ) {}

  async execute(input: ICreateCommand.Input): Promise<void> {
    const {
      name,
      cities
    } = input

    const state = new StateEntity().create({
      id: this.uuidManager.generate(),
      name,
      cities: cities.map((city) => {
        return {
          id: this.uuidManager.generate(),
          name: city.name,
          districts: city.districts.map((district) => {
            return {
              id: this.uuidManager.generate(),
              name: district.name
            }
          })
        }
      })
    })
    await this.stateRepository.save(state)
  }
}
