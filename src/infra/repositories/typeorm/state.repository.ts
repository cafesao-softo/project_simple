import { DataSource } from "typeorm";
import { IStateRepository } from "src/domain/repositories/state.repository";
import { StateEntity } from "src/domain/entities/state.entity";
import { StateMapper } from "./mapper/state.mapper";
import { StateAssembler } from "src/domain/repositories/assembler/state.assembler";

export class StateRepositoryTypeORMAdapter implements IStateRepository {
  constructor(private connection: DataSource) {}

  async find(input: Partial<IStateRepository.Find>): Promise<StateEntity[]> {
    const repository = this.connection.getRepository(StateMapper)
    const query = repository
      .createQueryBuilder('states')
      .leftJoinAndSelect('states.cities', 'cities');
    for (const key in input) {
      const i = Object.keys(input).indexOf(key);
      if (Object.prototype.hasOwnProperty.call(input, key)) {
        const value = input[key]
        query
          .andWhere(`states.${key} = :value_${i}`)
          .setParameter(`value_${i}`, value);
      }
    }
    const states = await query.getMany();
    return states.map((state) => StateAssembler.assembly(state))
  }

  async findOne(input: Partial<IStateRepository.Find>): Promise<StateEntity> {
    const repository = this.connection.getRepository(StateMapper)
    const query = repository
      .createQueryBuilder('states')
    for (const key in input) {
      const i = Object.keys(input).indexOf(key);
      if (Object.prototype.hasOwnProperty.call(input, key)) {
        const value = input[key]
        query
          .andWhere(`states.${key} = :value_${i}`)
          .setParameter(`value_${i}`, value);
      }
    }
  }

  async save(state: StateEntity): Promise<void> {
    const repository = this.connection.getRepository(StateMapper)
    const entity = repository.create({
      id: state.getState().id,
      name: state.getState().name,
      cities: state.getState()?.cities.map((city) => {
        return {
          id: city.getState().id,
          name: city.getState().name
        }
      })
    })
    await repository.save(entity, { reload: false })
  }
}