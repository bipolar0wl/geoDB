import { ApiProperty } from "@nestjs/swagger";

export class CreateTagDto {
  @ApiProperty({ example: `horny`, description: `Название тега` })
  name: string;
}
