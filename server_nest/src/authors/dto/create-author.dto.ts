import { ApiProperty } from '@nestjs/swagger';

export class CreateAuthorDto {
  @ApiProperty({
    example: `Путин В.В.`,
    description: `ФИО автора`,
  })
  name: string;
}
