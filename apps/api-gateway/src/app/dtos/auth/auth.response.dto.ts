import { ApiProperty } from "@nestjs/swagger";

export class ResponseLoginDto {
  @ApiProperty({
    example: 'token',
    description: 'Access token',
  })
  readonly token: string;

  @ApiProperty({
    example: 'token',
    description: 'Refresh token',
  })
  readonly refreshToken: string;
}

export class ResponseTokensDto {
  @ApiProperty({
    example: 'token',
    description: 'Access token',
  })
  readonly token: string;
}