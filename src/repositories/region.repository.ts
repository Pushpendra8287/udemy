import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor} from '@loopback/repository';
import {MongoDsDataSource} from '../datasources';
import {Region, RegionRelations, City} from '../models';
import {CityRepository} from './city.repository';

export class RegionRepository extends DefaultCrudRepository<
  Region,
  typeof Region.prototype.name,
  RegionRelations
> {

  public readonly city: BelongsToAccessor<City, typeof Region.prototype.name>;

  constructor(
    @inject('datasources.mongoDs') dataSource: MongoDsDataSource, @repository.getter('CityRepository') protected cityRepositoryGetter: Getter<CityRepository>,
  ) {
    super(Region, dataSource);
    this.city = this.createBelongsToAccessorFor('city', cityRepositoryGetter,);
    this.registerInclusionResolver('city', this.city.inclusionResolver);
  }
}
