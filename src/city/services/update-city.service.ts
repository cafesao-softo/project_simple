import { Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { City } from "../city.entity"
import { InjectRepository } from "@nestjs/typeorm"
import { UpdateCityParamsDTO } from "../dto/update-city.dto"

@Injectable()
export class UpdateCityService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>
  ) {}
  public async execute(params: UpdateCityParamsDTO, newData: Partial<City>) {
    const data = await this.cityRepository.findOne({
      where: { id: params.id },
      relations: {
        state: true,
        district: true
      }
    })
    if (data) {
      data.name = newData.name
      this.cityRepository.save(data)
      return true
    }
  }
}
