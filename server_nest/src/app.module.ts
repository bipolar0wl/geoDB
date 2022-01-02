import { TagsModule } from './tags/tags.module';
import { User } from './users/models/user.model';
import { Role } from './roles/models/role.model';
import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { ConfigModule } from '@nestjs/config';
import { UsersModule } from './users/users.module';
import { role2user } from './junction/role2user.model';

@Module({
  imports: [
        TagsModule, 
    ConfigModule.forRoot({
      envFilePath: `.${process.env.NODE_ENV}.env`,
    }),
    SequelizeModule.forRoot({
      dialect: 'postgres',
      host: process.env.DB_HOST || 'localhost',
      port: Number(process.env.DB_PORT) || 5433,
      username: process.env.DB_USERNAME || 'postgres',
      password: process.env.DB_PASSWORD || '',
      database: process.env.DB_NAME || 'geologDB',
      autoLoadModels: true,
      synchronize: true,
      models: [User, Role, role2user],
    }),
    UsersModule,
    // RolesModule,
    // BooksModule,
  ],
  // controllers: [TagsController, AppController, UsersController, BooksController],
  // providers: [TagsService, AppService, UsersService, BooksService],
})
export class AppModule {}
