import {Entity, model, property} from '@loopback/repository';

@model()
export class Ecom extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  _id?: string;


  @property({
    type: 'string',
    required: true,
    // jsonSchema: {
    //   maxLength: 10,
    //   minLength: 1,
    // },
    index: {
      unique: true
     },
  })
  name: string;

  @property({
    type: 'string',
    required: true,
  })
  color: string;

  @property({
    type: 'number',
    required: true,
  })
  price: number;

  @property({
    type: 'string',
    required: true,
  })
  category: string;

  @property({
    type: 'string',
    required: true,
  })
  brand: string;

  @property({
    type: 'string',
    required: true,
  })
  photo: string;
  @property({
    type: "number",
    required: true,
    jsonSchema: {
      pattern: "^[7-9][0-9]{9}$",
    },
  })
  mobile: string;
  static color: any;


  constructor(data?: Partial<Ecom>) {
    super(data);
  }
}

export interface EcomRelations {
  // describe navigational properties here
}

export type EcomWithRelations = Ecom & EcomRelations;
