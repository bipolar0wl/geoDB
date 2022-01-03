import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { RolesService } from './roles.service';
import { RolesController } from './roles.controller';
import { Role } from './models/role.model';
import { User } from 'src/users/models/user.model';
import { role2user } from 'src/junction/role2user.model';

@Module({
  imports: [SequelizeModule.forFeature([Role, User, role2user])],
  providers: [RolesService],
  controllers: [RolesController],
})
export class RolesModule {}
