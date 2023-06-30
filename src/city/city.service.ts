import { Injectable } from "@nestjs/common"
import { Repository } from "typeorm"
import { City } from "./city.entity"
import { InjectRepository } from "@nestjs/typeorm"
import { ReadCityParamsDTO, ReadCityParamsIdDTO } from "./dto/read-city.dto"
import { UpdateCityParamsDTO } from "./dto/update-city.dto"
import { DeleteCityParamsDTO } from "./dto/delete-city.dto"

@Injectable()
export class CityService {
  constructor(
    @InjectRepository(City)
    private cityRepository: Repository<City>
  ) {}
  public async readId(params: ReadCityParamsIdDTO, relations: boolean) {
    return await this.cityRepository.findOne({
      where: { id: params.id },
      relations: relations
        ? {
            state: true,
            district: true
          }
        : {}
    })
  }

  public async read(params: ReadCityParamsDTO, relations: boolean) {
    return await this.cityRepository.findOne({
      where: { name: params.cityName, state: { name: params.stateName } },
      relations: relations
        ? {
            state: true,
            district: true
          }
        : {}
    })
  }

  public async update(params: UpdateCityParamsDTO, newData: Partial<City>) {
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

  public async delete(params: DeleteCityParamsDTO) {
    await this.cityRepository.delete({ id: params.id })
  }
}
