import {Entity, model, property} from '@loopback/repository';

@model()
export class Post extends Entity {
  @property({
    type: 'string',
    id: true,
  })
  id: string;

  @property({
    type: 'string',
    required: true,
  })
  title: string;

  @property({
    type: 'string',
    required: true,
  })
  description: string;

  @property({
    type: 'string',
    required: true,
  })
  color: string;

  @property({
    type: 'string',
    required: true,
  })
  body: string;

  @property({
    type: 'number',
    default: Date.now,
  })
  created: number;

  @property({
    type: 'boolean',
    default: true,
  })
  is_visible: boolean;

  constructor(data?: Partial<Post>) {
    super(data);
  }
}
