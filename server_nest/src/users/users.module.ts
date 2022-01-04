import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { User } from './models/user.model';
import { Sample } from 'src/samples/models/sample.model';
import { Role } from 'src/roles/models/role.model';
import { role2user } from 'src/junction/role2user.model';

@Module({
  imports: [SequelizeModule.forFeature([User, Sample, Role, role2user])],
  providers: [UsersService],
  controllers: [UsersController],
  exports: [UsersService],
})
export class UsersModule {}
