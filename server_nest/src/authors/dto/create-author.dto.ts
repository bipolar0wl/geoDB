import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthorDto {
  @ApiProperty({
    example: `Карл Ге́нрих Маркс`,
    description: `ФИО автора`,
  })
  name: string;
}
