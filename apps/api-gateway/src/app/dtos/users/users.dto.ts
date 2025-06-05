import { ApiProperty } from '@nestjs/swagger';

export class UserResponseDto {
  @ApiProperty({ example: 'Donald', description: 'Name' })
  name: string;

  @ApiProperty({ example: 'Trump', description: 'Last name' })
  last_name: string;

  @ApiProperty({ example: 'donald_love_rf@gmail.com', description: 'Email' })
  email: string;

  @ApiProperty({ example: '1990-01-01', description: 'Date of birth' })
  birth_date: string;

  @ApiProperty({ example: '+380991234567', description: 'Phone' })
  phone: string;
}
