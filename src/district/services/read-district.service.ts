import { Repository } from "typeorm"
import { Injectable } from "@nestjs/common"
import { District } from "../district.entity"
import { InjectRepository } from "@nestjs/typeorm"
import { ReadDistrictServiceDTO } from "../dto/read-district.dto"

@Injectable()
export class ReadDistrictService {
  constructor(
    @InjectRepository(District)
    private districtRepository: Repository<District>
  ) {}
  public async execute(params: ReadDistrictServiceDTO, relations: boolean) {
    return await this.districtRepository.findOne({
      where: params.id
        ? { id: params.id }
        : { name: params.districtName, city: { name: params.cityName } },
      relations: relations
        ? {
            city: {
              state: true
            }
          }
        : {}
    })
  }
}
