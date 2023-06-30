import { Repository } from "typeorm"
import { Injectable } from "@nestjs/common"
import { District } from "./district.entity"
import { InjectRepository } from "@nestjs/typeorm"
import { UpdateDistrictParamsDTO } from "./dto/update-district.dto"
import { DeleteDistrictParamsDTO } from "./dto/delete-district.dto"
import { ReadDistrictParamsDTO } from "./dto/read-district.dto"

@Injectable()
export class DistrictService {
  constructor(
    @InjectRepository(District)
    private districtRepository: Repository<District>
  ) {}

  public async read(params: ReadDistrictParamsDTO, relations: boolean) {
    return await this.districtRepository.findOne({
      where: { name: params.districtName, city: { name: params.cityName } },
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
    params: UpdateDistrictParamsDTO,
    newData: Partial<District>
  ) {
    const data = await this.districtRepository.findOne({
      where: { name: params.districtName, city: { name: params.cityName } },
      relations: {
        city: {
          state: true
        }
      }
    })
    if (data) {
      data.name = newData.name
      this.districtRepository.save(data)
      return true
    }
  }

  public async delete(params: DeleteDistrictParamsDTO) {
    const data = await this.districtRepository.findOne({
      where: { name: params.districtName, city: { name: params.cityName } }
    })
    if (data) {
      await this.districtRepository.delete({
        id: data.id
      })
    }
  }
}
