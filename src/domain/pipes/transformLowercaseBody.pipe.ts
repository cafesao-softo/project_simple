import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common"
import { CreateDTO } from "../dto/create.dto"

@Injectable()
export class transformLowercaseBody implements PipeTransform {
  transform(value: CreateDTO, metadata: ArgumentMetadata) {
    Object.keys(value).map((valueMaps) => {
      value[valueMaps]["name"] = value[valueMaps]["name"].toLowerCase()
    })
    return value
  }
}
