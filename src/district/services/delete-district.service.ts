import { Repository } from "typeorm"
import { Injectable } from "@nestjs/common"
import { District } from "../district.entity"
import { InjectRepository } from "@nestjs/typeorm"
import { DeleteDistrictParamsDTO } from "../dto/delete-district.dto"

@Injectable()
export class DeleteDistrictService {
  constructor(
    @InjectRepository(District)
    private districtRepository: Repository<District>
  ) {}

  public async execute(params: DeleteDistrictParamsDTO) {
    await this.districtRepository.delete({ id: params.id })
  }
}
