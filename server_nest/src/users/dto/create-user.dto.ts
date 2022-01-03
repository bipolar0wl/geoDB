import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty({ example: `admin`, description: `Логин пользователя` })
  login: string;

  @ApiProperty({ example: `Зубенко`, description: `Фамилия пользователя` })
  lastName: string;

  @ApiProperty({ example: `Михаил`, description: `Имя пользователя` })
  firstName: string;

  @ApiProperty({ example: `Петрович`, description: `Отчество пользователя` })
  patronymic: string;

  @ApiProperty({
    example: `+7(999) 999-99-99`,
    description: `Телефон пользователя`,
  })
  phone: string;

  @ApiProperty({ example: `user@mail.com`, description: `Email пользователя` })
  email: string;

  @ApiProperty({ example: `qwerty`, description: `Пароль пользователя` })
  password: string;
}
