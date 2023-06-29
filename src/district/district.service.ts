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

  public async update(
    district: string,
    city: string,
    newData: Partial<District>
  ) {
    const data = await this.districtRepository.findOne({
      where: { name: district, city: { name: city } },
      relations: {
        city: {
          state: true
        }
      }
    })
    data.name = newData.name
    this.districtRepository.save(data)
    return true
  }
}
