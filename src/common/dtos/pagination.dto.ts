import { Type } from 'class-transformer';
import { IsOptional, IsPositive } from 'class-validator';

export class PaginationDto {
  @IsOptional()
  @IsPositive()
  //Transformar
  @Type(() => Number)   //enableImplicitConvertion = true
  limit?: number;

  @IsOptional()
  @Type(() => Number)   //enableImplicitConvertion = true
  offset?: number;
}
