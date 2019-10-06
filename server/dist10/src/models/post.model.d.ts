import { Entity } from '@loopback/repository';
export declare class Post extends Entity {
    id: string;
    title: string;
    description: string;
    color: string;
    body: string;
    created: number;
    is_visible: boolean;
    constructor(data?: Partial<Post>);
}
