import {inject} from '@loopback/core';
import {DefaultCrudRepository} from '@loopback/repository';
import {MongoDsDataSource} from '../datasources';
import {Ecom, EcomRelations} from '../models';

export class EcomRepository extends DefaultCrudRepository<
  Ecom,
  typeof Ecom.prototype._id,
  EcomRelations
> {
  constructor(
    @inject('datasources.mongoDs') dataSource: MongoDsDataSource,
  ) {
    super(Ecom, dataSource);
  }
}
