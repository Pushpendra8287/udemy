import {
  Count,
  CountSchema,
  Filter,
  FilterExcludingWhere,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getModelSchemaRef,
  patch,
  put,
  del,
  requestBody,
  response,
  HttpErrors,
} from '@loopback/rest';
import {Console} from 'console';
import {Ecom} from '../models';
import {EcomRepository} from '../repositories';

export class EcomController {
  constructor(
    @repository(EcomRepository)
    public ecomRepository: EcomRepository,
  ) { }

  @post('/ecoms')
  @response(200, {
    description: 'Ecom model instance',
    content: {'application/json': {schema: getModelSchemaRef(Ecom)}},
  })
  async create(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ecom, {
            title: 'NewEcom',
            exclude: ['_id'],
          }),
        },
      },
    })
    ecom: Omit<Ecom, '_id'>,
  ): Promise<Ecom> {

    let data = await this.ecomRepository.findOne({where: {color: Ecom.color}});
    if (data) {
      throw new NotFound('user allready exist')
    }


    // if(data)
    // if(data){
    // //  throw new HttpErrors.BadRequest("Already exist");
    // console.log(data)

    // }
    // [4:44 PM] Hardik Rathore
    // findOne({where: {name: Ecomm.name}});



    // console.log('my dat',this.ecomRepository)
    return this.ecomRepository.create(ecom);
  }

  @get('/ecoms/count')
  @response(200, {
    description: 'Ecom model count',
    content: {'application/json': {schema: CountSchema}},
  })
  async count(
    @param.where(Ecom) where?: Where<Ecom>,
  ): Promise<Count> {
    return this.ecomRepository.count(where);
  }

  @get('/ecoms')
  @response(200, {
    description: 'Array of Ecom model instances',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Ecom, {includeRelations: true}),
        },
      },
    },
  })
  async find(@param.query.string('name')name:string,
    // @param.path.number('mobile') mobile: number,
    @param.filter(Ecom) filter?: Filter<Ecom>,
  ): Promise<Ecom[]> {

    // return this.ecomRepository.find({ where: ({mobile:mobile} )});
    // await accountRepository.find({where: {name: 'John'}, limit: 3});
    // return await this.ecomRepository.find({where: {or: [Ecom.]}});
  //  let data =  await this.ecomRepository.find({where: {or: [{name: Ecom.name, color: Ecom.color}]}})
  //  let data = await this.ecomRepository.find({filter:{where:name=Ecom.name}});
//    filter = {
//     where: {
//       color: Ecom.color
//     }
//  };

let data =  await this.ecomRepository.find({where: {or: [{name: Ecom.name, color: Ecom.color}]}})
// return this.ecomRepository.find(name,filter)
return data

    // return result
    // return this.ecomRepository.find(filter);
  }
  @patch('/ecoms')
  @response(200, {
    description: 'Ecom PATCH success count',
    content: {'application/json': {schema: CountSchema}},
  })
  async updateAll(
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ecom, {partial: true}),
        },
      },
    })
    ecom: Ecom,
    @param.where(Ecom) where?: Where<Ecom>,
  ): Promise<Count> {
    return this.ecomRepository.updateAll(ecom, where);
  }

  @get('/ecoms/{id}')
  @response(200, {
    description: 'Ecom model instance',
    content: {
      'application/json': {
        schema: getModelSchemaRef(Ecom, {includeRelations: true}),
      },
    },
  })
  async findById(
    @param.path.string('id') id: string,
    @param.filter(Ecom, {exclude: 'where'}) filter?: FilterExcludingWhere<Ecom>
  ): Promise<Ecom> {
    // let email = await this.ecomRepository.findOne()
    // console.log('my dat',this.ecomRepository)
    return this.ecomRepository.findById(id);
  }

  @patch('/ecoms/{id}')
  @response(204, {
    description: 'Ecom PATCH success',
  })
  async updateById(
    @param.path.string('id') id: string,
    @requestBody({
      content: {
        'application/json': {
          schema: getModelSchemaRef(Ecom, {partial: true}),
        },
      },
    })
    ecom: Ecom,
  ): Promise<void> {
    await this.ecomRepository.updateById(id, ecom);
  }

  @put('/ecoms/{id}')
  @response(204, {
    description: 'Ecom PUT success',
  })
  async replaceById(
    @param.path.string('id') id: string,
    @requestBody() ecom: Ecom,
  ): Promise<void> {
    await this.ecomRepository.replaceById(id, ecom);
  }

  @del('/ecoms/{id}')
  @response(204, {
    description: 'Ecom DELETE success',
  })
  async deleteById(@param.path.string('id') id: string): Promise<void> {
    await this.ecomRepository.deleteById(id);
  }
}


class NotFound extends Error {
  statusCode: number;
  msg: string;

  constructor(message: string) {
    super(message)
    this.statusCode = 400
    this.msg = "Allready exist"
  }
}
function hi(): any {
  return {
    msg: "AllReady Exists",
    // status: 400
  }

}

