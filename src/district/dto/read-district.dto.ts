import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"
export class ReadDistrictParamsDTO {
  @ApiProperty({
    example: 1
  })
  @IsString()
  @IsNotEmpty()
  id: number
}

export class ReadDistrictServiceDTO {
  id?: number
  cityName?: string
  districtName?: string
}
