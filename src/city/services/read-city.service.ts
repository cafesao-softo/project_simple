import { Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { City } from "../city.entity"
import { InjectRepository } from "@nestjs/typeorm"
import { ReadCityParamsDTO, ReadCityServiceDTO } from "../dto/read-city.dto"

@Injectable()
export class ReadCityService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>
  ) {}
  public async execute(params: ReadCityServiceDTO, relations: boolean) {
    return await this.cityRepository.findOne({
      where: params.id
        ? { id: params.id }
        : { name: params.cityName, state: { name: params.stateName } },
      relations: relations
        ? {
            state: true,
            district: true
          }
        : {}
    })
  }
}
