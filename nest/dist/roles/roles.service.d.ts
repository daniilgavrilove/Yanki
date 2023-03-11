import { CreateOneRoleDto } from './dto/CreateOneRole.dto';
import { Role } from './roles.model';
export declare class RolesService {
    private RoleRepository;
    constructor(RoleRepository: typeof Role);
    createOneRole(dto: CreateOneRoleDto): Promise<Role>;
    getOneRole(value: string): Promise<Role>;
    getAllRoles(): Promise<Role[]>;
}
