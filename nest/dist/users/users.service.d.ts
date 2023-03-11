import { RolesService } from 'src/roles/roles.service';
import { CreateOneUserDto } from './dto/CreateOneUser.dto';
import { User } from './users.model';
export declare class UsersService {
    private UsersRepository;
    private roleService;
    constructor(UsersRepository: typeof User, roleService: RolesService);
    createOneUser(dto: CreateOneUserDto): Promise<User>;
    getAllUsers(): Promise<User[]>;
}
