import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';
import { EdprimeApplication } from '../application';

const config = {
  name: 'mongoDs',
  connector: 'mongodb',
  url: 'mongodb+srv://rohit2424:AdMyJHKIfWtpT31H@cluster0.ki3d0.mongodb.net',
  host: '',
  port: '',
  user: '',
  password: '',
  database: 'db',
  useNewUrlParser: true
};
// if
// name unique
// email unique
// mobile



// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class MongoDsDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'mongoDs';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.mongoDs', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
