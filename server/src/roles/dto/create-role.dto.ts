import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags(`Роли`)
export class CreateRoleDto {
  @ApiProperty({ example: `Администратор`, description: `Роль пользователя` })
  name: string;
  @ApiProperty({ example: `Администратор`, description: `Описание роли` })
  description: string;
}
