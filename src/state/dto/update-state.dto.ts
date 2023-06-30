import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class UpdateStateBodyDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  name: string
}

export class UpdateStateParamsDTO {
  @ApiProperty()
  @IsString()
  @IsNotEmpty()
  id: number
}
