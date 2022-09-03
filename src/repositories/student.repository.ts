import {inject, Getter} from '@loopback/core';
import {DefaultCrudRepository, repository, BelongsToAccessor, HasOneRepository, HasOneRepositoryFactory} from '@loopback/repository';
import {MongoDsDataSource} from '../datasources';
import {Student, StudentRelations, Department, Address} from '../models';
import {AddressRepository} from './address.repository';
import {DepartmentRepository} from './department.repository';

export class StudentRepository extends DefaultCrudRepository<
  Student,
  typeof Student.prototype.id,
  StudentRelations
> {

  public readonly department: BelongsToAccessor<Department, typeof Student.prototype.id>;

  public readonly address: HasOneRepositoryFactory<Address, typeof Student.prototype.id>;


  constructor(
    @inject('datasources.Mysql') dataSource: MongoDsDataSource,
    @repository.getter('DepartmentRepository') protected departmentRepositoryGetter: Getter<DepartmentRepository>,
    @repository.getter('AddressRepository') protected addressRepositoryGetter: Getter<AddressRepository>
  ) {
    super(Student, dataSource);
    this.department = this.createBelongsToAccessorFor('department', departmentRepositoryGetter,);
    this.registerInclusionResolver('department', this.department.inclusionResolver);
    this.address = this.createHasOneRepositoryFactoryFor('address', addressRepositoryGetter)
    this.registerInclusionResolver('address', this.address.inclusionResolver);
  }

}
