import { Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { City } from "./city.entity"
import { InjectRepository } from "@nestjs/typeorm"

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>
  ) {}
  public async get(value: string, relations: boolean) {
    return await this.cityRepository.findOne({
      where: { name: value },
      relations: relations
        ? {
            state: true,
            district: true
          }
        : {}
    })
  }
}
