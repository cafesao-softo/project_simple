import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common"
import { ICreateDTO } from "src/domain/dto/create.dto"

@Injectable()
export class transformLowercaseBodyCreate implements PipeTransform {
  transform(value: ICreateDTO, metadata: ArgumentMetadata) {
    value.state.name = value.state.name.toLowerCase()
    value.state.city.name = value.state.city.name.toLowerCase()
    value.state.city.district.name =
      value.state.city.district.name.toLowerCase()
    return value
  }
}
