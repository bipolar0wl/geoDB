import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { CreateRoleDto } from './dto/create-role.dto';
import { UpdateRoleDto } from './dto/update-role.dto';
import { Role } from './models/role.model';

@Injectable()
export class RolesService {
  constructor(
    @InjectModel(Role)
    private readonly roleModel: typeof Role,
  ) {}

  create(createRoleDto: CreateRoleDto): Promise<Role> {
    return this.roleModel.create(createRoleDto);
  }

  async findAll(): Promise<Role[]> {
    return this.roleModel.findAll();
  }

  findOne(id: string): Promise<Role> {
    return this.roleModel.findByPk(id);
  }

  findBy(id: string): Promise<Role> {
    return this.roleModel.findOne({
      where: {
        id,
      },
    });
  }

  async update(updateUserDto: UpdateRoleDto, id: string) {
    return this.roleModel.update(updateUserDto, { where: { id } });
  }

  async remove(id: string): Promise<void> {
    const user = await this.roleModel.findByPk(id);
    await user.destroy();
  }
}
