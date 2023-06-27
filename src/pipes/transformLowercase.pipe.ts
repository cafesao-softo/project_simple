import { PipeTransform, Injectable, ArgumentMetadata } from "@nestjs/common"

@Injectable()
export class transformLowercase implements PipeTransform {
  transform(value: string, metadata: ArgumentMetadata) {
    return value.toLowerCase()
  }
}
