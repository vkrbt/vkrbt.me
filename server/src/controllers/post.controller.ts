import {
  Filter,
  repository,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  patch,
  del,
  requestBody,
} from '@loopback/rest';
import {Post} from '../models';
import {PostRepository} from '../repositories';
import {secured, SecuredType} from '../auth';
import * as sanitizeHtml from 'sanitize-html';

export class PostController {
  constructor(
    @repository(PostRepository)
    public postRepository : PostRepository,
  ) {}

  @post('/posts', {
    responses: {
      '200': {
        description: 'Post model instance',
        content: {'application/json': {'x-ts-type': Post}},
      },
    },
  })
  @secured(SecuredType.IS_AUTHENTICATED)
  async create(@requestBody() post: Post): Promise<Post> {
    post.body = sanitizeHtml(post.body);

    return await this.postRepository.create(post);
  }

  @get('/posts', {
    responses: {
      '200': {
        description: 'Array of Post model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Post}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Post)) filter?: Filter,
  ): Promise<Post[]> {
    return await this.postRepository.find({
        ...filter,
        fields: {
            body: false,
        },
    });
  }

  @get('/posts/{id}', {
    responses: {
      '200': {
        description: 'Post model instance',
        content: {'application/json': {'x-ts-type': Post}},
      },
    },
  })
  async findById(@param.path.string('id') id: string): Promise<Post> {
    return await this.postRepository.findById(id);
  }

  @patch('/posts/{id}', {
    responses: {
      '204': {
        description: 'Post PATCH success',
      },
    },
  })
  @secured(SecuredType.IS_AUTHENTICATED)
  async updateById(
    @param.path.string('id') id: string,
    @requestBody() post: Post,
  ): Promise<void> {
    post.body = sanitizeHtml(post.body);
    await this.postRepository.updateById(id, post);
  }

  @del('/posts/{id}', {
    responses: {
      '204': {
        description: 'Post DELETE success',
      },
    },
  })
  @secured(SecuredType.IS_AUTHENTICATED)
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.postRepository.deleteById(id);
  }
}
