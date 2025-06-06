import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsOptional } from "class-validator";

export class RequestPaginationQueryDto {
  @IsOptional()
  @ApiPropertyOptional({ description: 'Items per page', default: 20 })
  limit = 20;

  @IsOptional()
  @ApiPropertyOptional({ description: 'Page number', default: 1 })
  page = 1;
}
