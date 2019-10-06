import { DefaultCrudRepository } from '@loopback/repository';
import { User } from '../models';
import { DbDataSource } from '../datasources';
export declare class UserRepository extends DefaultCrudRepository<User, typeof User.prototype.id> {
    constructor(dataSource: DbDataSource);
}
