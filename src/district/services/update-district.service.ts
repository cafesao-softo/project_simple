import { Repository } from "typeorm"
import { Injectable } from "@nestjs/common"
import { District } from "../district.entity"
import { InjectRepository } from "@nestjs/typeorm"
import { UpdateDistrictParamsDTO } from "../dto/update-district.dto"

@Injectable()
export class UpdateDistrictService {
  constructor(
    @InjectRepository(District)
    private districtRepository: Repository<District>
  ) {}

  public async execute(
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
    if (data) {
      data.name = newData.name
      this.districtRepository.save(data)
      return true
    }
  }
}
