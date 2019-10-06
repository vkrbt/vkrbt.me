import { User } from '../models';
import { UserRepository } from '../repositories';
import { Credentials } from '../auth';
export declare class UserController {
    private userRepository;
    constructor(userRepository: UserRepository);
    createUser(user: User): Promise<User>;
    login(credentials: Credentials): Promise<{
        token: any;
        id: string;
        email: string;
    }>;
}
