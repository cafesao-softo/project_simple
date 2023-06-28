import { IsNotEmpty, IsString } from "class-validator"

export class UpdateDistrictDTO {
  @IsString()
  @IsNotEmpty()
  name: string
}
