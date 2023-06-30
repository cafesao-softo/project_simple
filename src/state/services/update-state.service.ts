import { Repository } from "typeorm"
import { Injectable } from "@nestjs/common"
import { State } from "../state.entity"
import { InjectRepository } from "@nestjs/typeorm"
import { UpdateStateParamsDTO } from "../dto/update-state.dto"

@Injectable()
export class UpdateStateService {
  constructor(
    @InjectRepository(State)
    private readonly stateRepository: Repository<State>
  ) {}

  public async execute(params: UpdateStateParamsDTO, newData: Partial<State>) {
    await this.stateRepository.update({ id: params.id }, newData)
    return true
  }
}
