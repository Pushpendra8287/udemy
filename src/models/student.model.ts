import {Entity, model, property, belongsTo, hasOne} from '@loopback/repository';
import {Address, AddressRelations} from './address.model';
import {Department} from './department.model';

@model()
export class Student extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'string',
    required: true,
  })
  firstName: string;

  @property({
    type: 'string',
    required: true,
  })
  lastnName: string;

  @property({
    type: 'number',
  })
  courseId?: number;

  @belongsTo(() => Department)
  departmentId: number;
  
  @hasOne(() => Address)
  address:Address;

  constructor(data?: Partial<Student>) {
    super(data);
  }
}

export interface StudentRelations {
  address?: AddressRelations;
  // describe navigational properties here
}

export type StudentWithRelations = Student & StudentRelations;
