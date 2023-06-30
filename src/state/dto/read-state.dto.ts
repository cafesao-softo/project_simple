import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class ReadStateParamsIdDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: number
}

export class ReadStateParamsDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  stateName: string
}
