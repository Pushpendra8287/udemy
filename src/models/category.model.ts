import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Category extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;

  @property({
    type: 'string',
    required: true,
  })
  edition: string;

  @property({
    type: 'number',
    required: true,
  })
  editionYear: number;

  @property({
    type: 'string',
    required: true,
  })
  language: string;

  @property({
    type: 'string',
    required: true,
  })
  publisher: string;

  @property({
    type: 'number',
    required: true,
    unique:true
  })
  publisherYear: number;

  @property({
    type: 'number',
    required: true,
  })
  series: number;

  @property({
    type: 'string',
    required: true,
  })
  author: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'number',
    required: true,
  })
  quantity: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Category>) {
    super(data);
  }
}

export interface CategoryRelations {
  // describe navigational properties here
}

export type CategoryWithRelations = Category & CategoryRelations;
