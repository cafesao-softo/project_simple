import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common"
import { ICreateDTO } from "src/domain/dto/create.dto"

@Injectable()
export class transformLowercaseBody implements PipeTransform {
  transform(value: ICreateDTO, metadata: ArgumentMetadata) {
    Object.keys(value).map((valueMaps) => {
      value[valueMaps]["name"] = value[valueMaps]["name"].toLowerCase()
    })
    return value
  }
}
