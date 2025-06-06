import { ApiProperty } from "@nestjs/swagger";

export class ResponseSuccessDto {
  @ApiProperty({
    example: 'true',
    description: 'Success',
  })
  readonly success: boolean;
}
