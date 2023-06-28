import { Repository } from "typeorm"
import { Injectable } from "@nestjs/common"
import { State } from "./state.entity"
import { InjectRepository } from "@nestjs/typeorm"

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(State)
    private readonly stateRepository: Repository<State>
  ) {}

  public async get(value: string, relations: boolean) {
    return await this.stateRepository.findOne({
      where: { name: value },
      relations: relations
        ? {
            city: {
              district: true
            }
          }
        : {}
    })
  }
}
