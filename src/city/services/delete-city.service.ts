import { Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { City } from "../city.entity"
import { InjectRepository } from "@nestjs/typeorm"
import { DeleteCityParamsDTO } from "../dto/delete-city.dto"

@Injectable()
export class DeleteCityService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>
  ) {}
  public async execute(params: DeleteCityParamsDTO) {
    await this.cityRepository.delete({ id: params.id })
  }
}
