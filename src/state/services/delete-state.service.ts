import { Repository } from "typeorm"
import { Injectable } from "@nestjs/common"
import { State } from "../state.entity"
import { InjectRepository } from "@nestjs/typeorm"
import { DeleteStateParamsDTO } from "../dto/delete-state.dto"

@Injectable()
export class DeleteStateService {
  constructor(
    @InjectRepository(State)
    private readonly stateRepository: Repository<State>
  ) {}
  public async execute(params: DeleteStateParamsDTO) {
    await this.stateRepository.delete({ id: params.id })
  }
}
