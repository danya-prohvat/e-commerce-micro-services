import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from 'class-validator';
import { RequestUserDto } from "../users/users.request.dto";

export class RequestLoginDto {
  @ApiProperty({ example: 'donald_love_rf@gmail.com', description: 'Email' })
  @IsString({ message: 'Must be string' })
  @IsNotEmpty({ message: 'Email must be set' })
  email: string;

  @ApiProperty({ example: '1234qwerty', description: 'Password' })
  @IsString({ message: 'Must be string' })
  @IsNotEmpty({ message: 'Password must be set' })
  password: string;
}

export class RequestRefreshTokenDto {
  @ApiProperty({
    example: 'token',
    description: 'Refresh token',
  })
  @IsString({ message: 'Must be string' })
  @IsNotEmpty({ message: 'Refresh token must be set' })
  readonly refreshToken: string;
}

export class SignupDto extends RequestUserDto {}
