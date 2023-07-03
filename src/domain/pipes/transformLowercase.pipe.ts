import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common"

@Injectable()
export class transformLowercase implements PipeTransform {
  transform(value: object, metadata: ArgumentMetadata) {
    Object.keys(value).map((valueMaps) => {
      value[valueMaps] = value[valueMaps].toLowerCase()
    })
    return value
  }
}
