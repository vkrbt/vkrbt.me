import { DefaultCrudRepository } from '@loopback/repository';
import { Post } from '../models';
import { DbDataSource } from '../datasources';
export declare class PostRepository extends DefaultCrudRepository<Post, typeof Post.prototype.id> {
    constructor(dataSource: DbDataSource);
}
