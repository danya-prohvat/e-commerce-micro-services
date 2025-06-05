import { ApiProperty } from "@nestjs/swagger";

export class SuccessResponseDto {
  @ApiProperty({
    example: 'true',
    description: 'Success',
  })
  readonly success: boolean;
}