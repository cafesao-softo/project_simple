import { Repository } from "typeorm"
import { Injectable } from "@nestjs/common"
import { District } from "./district.entity"
import { InjectRepository } from "@nestjs/typeorm"

@Injectable()
export class DistrictService {
  constructor(
    @InjectRepository(District)
    private districtRepository: Repository<District>
  ) {}

  public async get(value: string, relations: boolean) {
    return await this.districtRepository.find({
      where: { name: value },
      relations: relations
        ? {
            city: {
              state: true
            }
          }
        : {}
    })
  }

  public async getOne(district: string, city: string, relations: boolean) {
    return await this.districtRepository.findOne({
      where: { name: district, city: { name: city } },
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
