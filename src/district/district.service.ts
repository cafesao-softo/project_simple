import { Repository } from "typeorm"
import { Injectable } from "@nestjs/common"
import { District } from "./district.entity"
import { InjectRepository } from "@nestjs/typeorm"
import { UpdateDistrictParamsDTO } from "./dto/update-district.dto"
import { DeleteDistrictParamsDTO } from "./dto/delete-district.dto"
import {
  ReadDistrictParamsDTO,
  ReadDistrictIdParamsDTO
} from "./dto/read-district.dto"

@Injectable()
export class DistrictService {
  constructor(
    @InjectRepository(District)
    private districtRepository: Repository<District>
  ) {}

  public async readId(params: ReadDistrictIdParamsDTO, relations: boolean) {
    return await this.districtRepository.findOne({
      where: { id: params.id },
      relations: relations
        ? {
            city: {
              state: true
            }
          }
        : {}
    })
  }

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
      where: { id: params.id },
      relations: {
        city: {
          state: true
        }
      }
    })
    //await this.districtRepository.update({id: params.id}, newData)
    if (data) {
      data.name = newData.name
      this.districtRepository.save(data)
      return true
    }
  }

  public async delete(params: DeleteDistrictParamsDTO) {
    await this.districtRepository.delete({ id: params.id })
  }
}
