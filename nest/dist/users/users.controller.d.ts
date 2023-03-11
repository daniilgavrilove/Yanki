import { CreateOneUserDto } from './dto/CreateOneUser.dto';
import { User } from './users.model';
import { UsersService } from './users.service';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(userDto: CreateOneUserDto): Promise<User>;
    getAll(): Promise<User[]>;
}
