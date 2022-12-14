// Uncomment these imports to begin using these cool features!

import {repository} from '@loopback/repository';
import {param, post, requestBody} from '@loopback/rest';
import {Address, Student} from '../models';
import {StudentRepository} from '../repositories';

// import {inject} from '@loopback/core';


export class StudentAddressController {
  constructor(
    @repository(StudentRepository)
    protected studentRepository: StudentRepository
  ) { }

  @post('/student/{id}/address')
    async createAddress(
    @param.path.number('id')
    studentId: typeof Student.prototype.id,
    @requestBody()
    Addressdata: Address,

  ): Promise<Address> {
    return await this.studentRepository.address(studentId).create(Addressdata)
  }


}
