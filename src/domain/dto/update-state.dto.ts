import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class UpdateStateBodyDTO {
  @ApiProperty({
    example: "Santa Catarina"
  })
  @IsString()
  @IsNotEmpty()
  name: string
}

export class UpdateStateParamsDTO {
  @ApiProperty({
    example: 1
  })
  @IsString()
  @IsNotEmpty()
  id: string
}
