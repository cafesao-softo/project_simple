import { Repository } from "typeorm"
import { Injectable } from "@nestjs/common"
import { State } from "./state.entity"
import { InjectRepository } from "@nestjs/typeorm"
import { UpdateStateParamsDTO } from "./dto/update-state.dto"
import { DeleteStateParamsDTO } from "./dto/delete-state.dto"
import { ReadStateParamsDTO, ReadStateParamsIdDTO } from "./dto/read-state.dto"

@Injectable()
export class StateService {
  constructor(
    @InjectRepository(State)
    private readonly stateRepository: Repository<State>
  ) {}

  public async readId(params: ReadStateParamsIdDTO, relations: boolean) {
    return await this.stateRepository.findOne({
      where: { id: params.id },
      relations: relations
        ? {
            city: {
              district: true
            }
          }
        : {}
    })
  }

  public async read(params: ReadStateParamsDTO, relations: boolean) {
    return await this.stateRepository.findOne({
      where: { name: params.stateName },
      relations: relations
        ? {
            city: {
              district: true
            }
          }
        : {}
    })
  }

  public async update(params: UpdateStateParamsDTO, newData: Partial<State>) {
    await this.stateRepository.update({ id: params.id }, newData)
    return true
  }

  public async delete(params: DeleteStateParamsDTO) {
    await this.stateRepository.delete({ id: params.id })
  }
}
