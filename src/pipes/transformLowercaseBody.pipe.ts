import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common"

@Injectable()
export class transformLowercaseBody implements PipeTransform {
  transform(value: IBody, metadata: ArgumentMetadata) {
    Object.keys(value).map((valueMaps) => {
      value[valueMaps]["name"] = value[valueMaps]["name"].toLowerCase()
    })
    return value
  }
}
