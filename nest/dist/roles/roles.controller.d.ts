import { CreateOneRoleDto } from './dto/CreateOneRole.dto';
import { Role } from './roles.model';
import { RolesService } from './roles.service';
export declare class RolesController {
    private rolesService;
    constructor(rolesService: RolesService);
    create(roleDto: CreateOneRoleDto): Promise<Role>;
    getAll(): Promise<Role[]>;
    getOne(value: string): Promise<Role>;
}
