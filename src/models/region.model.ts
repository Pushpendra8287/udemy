import {Entity, model, property, belongsTo} from '@loopback/repository';
import {City} from './city.model';

@model({settings: {strict: false}})
export class Region extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  name: string;

  @belongsTo(() => City)
  cityId: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Region>) {
    super(data);
  }
}

export interface RegionRelations {
  // describe navigational properties here
}

export type RegionWithRelations = Region & RegionRelations;
