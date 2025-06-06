import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class RequestUserDto {
  @ApiProperty({ example: 'Donald', description: 'Name' })
  @IsString({ message: 'Must be string' })
  @IsNotEmpty({ message: 'Name must be set' })
  name: string;

  @ApiProperty({ example: 'Trump', description: 'Last name' })
  @IsString({ message: 'Must be string' })
  @IsNotEmpty({ message: 'Last name must be set' })
  last_name: string;

  @ApiProperty({ example: '1234qwerty', description: 'Password' })
  @IsString({ message: 'Must be string' })
  @IsNotEmpty({ message: 'Password must be set' })
  password: string;

  @ApiProperty({ example: 'donald_love_rf@gmail.com', description: 'Email' })
  @IsString({ message: 'Must be string' })
  @IsNotEmpty({ message: 'Email must be set' })
  email: string;

  @ApiProperty({ example: '1990-01-01', description: 'Date of birth' })
  @IsString({ message: 'Must be string' })
  @IsNotEmpty({ message: 'Date of birth must be set' })
  birth_date: string;

  @ApiProperty({ example: '+380991234567', description: 'Phone' })
  @IsString({ message: 'Must be string' })
  @IsNotEmpty({ message: 'Phone must be set' })
  phone: string;
}
