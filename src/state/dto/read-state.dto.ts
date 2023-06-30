import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class ReadStateParamsDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id?: number
}

export class ReadStateServiceDTO {
  id?: number
  stateName?: string
}
