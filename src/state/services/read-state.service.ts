import { Repository } from "typeorm"
import { Injectable } from "@nestjs/common"
import { State } from "../state.entity"
import { InjectRepository } from "@nestjs/typeorm"
import { ReadStateServiceDTO } from "../dto/read-state.dto"

@Injectable()
export class ReadStateService {
  constructor(
    @InjectRepository(State)
    private readonly stateRepository: Repository<State>
  ) {}

  public async execute(params: ReadStateServiceDTO, relations: boolean) {
    return await this.stateRepository.findOne({
      where: params.id ? { id: params.id } : { name: params.stateName },
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
