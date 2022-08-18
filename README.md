# edprime

# mogodb connect wuth loopback4 command
npm install loopback-connector-mongodb --save

# after that command
lb4 datasource mongoDs --connector mongoDB

# after that command create repository
lb4 repository







This application is generated using [LoopBack 4 CLI](https://loopback.io/doc/en/lb4/Command-line-interface.html) with the
[initial project layout](https://loopback.io/doc/en/lb4/Loopback-application-layout.html).

## Install dependencies

By default, dependencies were installed when this application was generated.
Whenever dependencies in `package.json` are changed, run the following command:

```sh
npm install
```

To only install resolved dependencies in `package-lock.json`:

```sh
npm ci
```

## Run the application

```sh
npm start
```

You can also run `node .` to skip the build step.

Open http://127.0.0.1:3000 in your browser.

## Rebuild the project

To incrementally build the project:

```sh
npm run build
```

To force a full build by cleaning up cached artifacts:

```sh
npm run rebuild
```

## Fix code style and formatting issues

```sh
npm run lint
```

To automatically fix such issues:

```sh
npm run lint:fix
```

## Other useful commands

- `npm run migrate`: Migrate database schemas for models
- `npm run openapi-spec`: Generate OpenAPI spec into a file
- `npm run docker:build`: Build a Docker image for this application
- `npm run docker:run`: Run this application inside a Docker container

## Tests

```sh
npm test
```

## What's next

Please check out [LoopBack 4 documentation](https://loopback.io/doc/en/lb4/) to
understand how you can continue to add features to this application.

[![LoopBack](https://github.com/loopbackio/loopback-next/raw/master/docs/site/imgs/branding/Powered-by-LoopBack-Badge-(blue)-@2x.png)](http://loopback.io/)






































? Please select the model base class Enti
? Allow additional (free-form) properties
Model Category will be created in src/mod

Let's add a property to Category
Enter an empty property name when done

? Enter the property name: edition
? Property type: string
? Is edition the ID property? Yes
? Is edition generated automatically? Yes

Let's add another property to Category
Enter an empty property name when done

? Enter the property name: Edition
? Property type: string
? Is it required?: Yes

Let's add another property to Category
Enter an empty property name when done

? Enter the property name:
PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopb
? Model class name: user
? Please select the model base class Enti
? Allow additional (free-form) properties
Model User will be created in src/models/

Let's add a property to User
Enter an empty property name when done

? Enter the property name: userId
? Property type: number
? Is userId the ID property? Yes
? Is userId generated automatically? Yes

Let's add another property to User
Enter an empty property name when done

? Enter the property name: userName
? Property type: string
? Is it required?: No
? Default value [leave blank for none]:

Let's add another property to User
Enter an empty property name when done

? Enter the property name: mobileNumber
? Property type: number
? Is it required?: Yes

Let's add another property to User
Enter an empty property name when done

? Enter the property name: emaiId
? Property type: string
? Is it required?: Yes

Let's add another property to User
Enter an empty property name when done

? Enter the property name: password
? Property type: string
? Is it required?: Yes

Let's add another property to User
Enter an empty property name when done

? Enter the property name:
   create src\models\user.model.ts
   update src\models\index.ts

Model User was/were created in src\modelsodels

PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo> lb? Datasource name: mongods
? Select the connector for mongods:  (Use arrow keys)
> In-memory db (supported by StrongLoop)
? Select the connector for mongods: 
  In-memory db (supported by StrongLoop)
? Select the connector for mongods: 
  In-memory db (supported by StrongLoop)
? Select the connector for mongods: 
  In-memory db (supported by StrongLoop)
? Select the connector for mongods: 
  IBM Object Storage (supported by StrongLoop)
? Select the connector for mongods: 
  IBM Db2 (for Linux, Unix, Windows) (supported by StrongLoop)
? Select the connector for mongods: 

? Select the connector for mongods: 
  IBM i (Db2 for i) (supported by StrongLoop)
? Select the connector for mongods:  
  IBM Db2 for z/OS (supported by StrongLoop) 
? Select the connector for mongods: 
  IBM DashDB (supported by StrongLoop)
? Select the connector for mongods: 
  IBM MQ Light (supported by StrongLoop)
? Select the connector for mongods: 
  Couchdb 2.x (supported by StrongLoop)
? Select the connector for mongods: 
  IBM WebSphere eXtreme Scale key-value connector (supported b? Select the connector for mongods: 
y StrongLoop)
? Select the connector for mongods: 
  Cassandra (supported by StrongLoop)
? Select the connector for mongods:  MongoDB (supported by StrongLoop)
? Connection String url to override other settings (eg: mongodb://username:password@hostname:port/database):
? host: 27017
? port:
PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo> lb4 datasource
? Datasource name: mongods
? Select the connector for mongods:  (Use arrow keys)
> In-memory db (supported by StrongLoop)
? Select the connector for mongods: 
  In-memory db (supported by StrongLoop)
? Select the connector for mongods: 
  In-memory db (supported by StrongLoop)
? Select the connector for mongods: 
  In-memory db (supported by StrongLoop)
? Select the connector for mongods: 
  IBM Object Storage (supported by StrongLoop)
? Select the connector for mongods: 
  IBM Db2 (for Linux, Unix, Windows) (supported by StrongLoop)
? Select the connector for mongods: 

? Select the connector for mongods: 
  IBM i (Db2 for i) (supported by StrongLoop)
? Select the connector for mongods:  
  IBM Db2 for z/OS (supported by StrongLoop) 
? Select the connector for mongods: 
  IBM DashDB (supported by StrongLoop)
? Select the connector for mongods: 
  IBM MQ Light (supported by StrongLoop)
? Select the connector for mongods: 
  Couchdb 2.x (supported by StrongLoop)
? Select the connector for mongods: 
  IBM WebSphere eXtreme Scale key-value connector (supported b? Select the connector for mongods: 
y StrongLoop)
? Select the connector for mongods: 
  Cassandra (supported by StrongLoop)
? Select the connector for mongods:  MongoDB (supported by StrongLoop)
? Connection String url to override other settings (eg: mongodb://username:password@hostname:port/database):
? host: localhost
? port: 27017
? user:
? password: [hidden]
? database: user
? Feature supported by MongoDB v3.1.0 and above: Yes
   create src\datasources\mongods.datasource.ts
   update src\datasources\index.ts

Datasource Mongods was/were created in src\datasources

PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo> lb
4 repository
? Select the datasource MongodsDatasource
? Select the model(s) you want to generate a repository for User
   create src\repositories\user.repository.ts
   update src\repositories\index.ts

Repository UserRepository was/were created in src\repositories
PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo>
PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo> lb4 relation
? Please select the relation type hasMany
? Please select source model User
? Please select target model Book
? Foreign key name to define on the target model userId
? Source property name for the relation getter (will be the relation name) books
? Allow User queries to include data from related Book instances?  Yes
   create src\controllers\user-book.controller.ts

Relation HasMany was/were created in src

PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo> lb4
? Project name: (loopback-4-example-todo)
PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo> lb4 relation
? Please select the relation type belongsTo
? Please select source model Book
? Please select target model User
? Foreign key name to define on the source model userId
? Relation name user
? Allow Book queries to include data from related User instances?  Yes
   create src\controllers\book-user.controller.ts

Relation BelongsTo was/were created in src

PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo> lb4 controller
? Controller class name: userController
Controller UserController will be created in src/controllers/user-controller.controller.ts

? What kind of controller would you like to generate? REST Controller with CRUD functtroller with CRUD functions
? What is the name of the model to use with this CRUD repository? Userry? User
? What is the name of your CRUD repository? UserRepository
? What is the name of ID property? userId
? What is the type of your ID? number
? Is the id omitted when creating a new instance? Yes
? What is the base HTTP path name of the CRUD operations? /users
   create src\controllers\user-controller.controller.ts
   update src\controllers\index.ts

Controller UserController was/were created in src\controllers

PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo> np
m start
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> @loopback/example-todo@6.0.2 prestart
> npm run rebuild

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> @loopback/example-todo@6.0.2 rebuild
> npm run clean && npm run build

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> @loopback/example-todo@6.0.2 clean
> lb-clean *example-todo*.tgz dist *.tsbuildinfo package

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> @loopback/example-todo@6.0.2 build
> lb-tsc


> @loopback/example-todo@6.0.2 start
> node .

Server is running at http://[::1]:3000
Terminate batch job (Y/N)? y
PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo> npm start
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> @loopback/example-todo@6.0.2 prestart
> npm run rebuild

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> @loopback/example-todo@6.0.2 rebuild
> npm run clean && npm run build

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> @loopback/example-todo@6.0.2 clean
> lb-clean *example-todo*.tgz dist *.tsbuildinfo package

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> @loopback/example-todo@6.0.2 build
> lb-tsc

src/controllers/user-book.controller.ts:57:56 - error TS2339: Property 'userId' does not

57     @param.path.number('id') id: typeof User.prototype.userId,
                                                          ~~~~~~

src/controllers/user-controller.controller.ts:40:23 - error TS2322: Type '"userId"' is n

40             exclude: ['userId'],
                         ~~~~~~~~

src/repositories/user.repository.ts:9:25 - error TS2339: Property 'userId' does not exis

9   typeof User.prototype.userId,
                          ~~~~~~

src/repositories/user.repository.ts:13:79 - error TS2339: Property 'userId' does not exi

13   public readonly books: HasManyRepositoryFactory<Book, typeof User.prototype.userId>
                                                                                 ~~~~~~


Found 4 errors in 3 files.

Errors  Files
     1  src/controllers/user-book.controller.ts:57
     1  src/controllers/user-controller.controller.ts:40
     2  src/repositories/user.repository.ts:9
PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo> npm start
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> @loopback/example-todo@6.0.2 prestart
> npm run rebuild

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> @loopback/example-todo@6.0.2 rebuild
> npm run clean && npm run build

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> @loopback/example-todo@6.0.2 clean
> lb-clean *example-todo*.tgz dist *.tsbuildinfo package

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> @loopback/example-todo@6.0.2 build
> lb-tsc

src/controllers/user-book.controller.ts:57:56 - error TS2339: Property 'userId' does not

57     @param.path.number('id') id: typeof User.prototype.userId,
                                                          ~~~~~~

src/controllers/user-controller.controller.ts:40:23 - error TS2322: Type '"userId"' is n

40             exclude: ['userId'],
                         ~~~~~~~~

src/repositories/user.repository.ts:9:25 - error TS2339: Property 'userId' does not exis

9   typeof User.prototype.userId,
                          ~~~~~~

src/repositories/user.repository.ts:13:79 - error TS2339: Property 'userId' does not exi

13   public readonly books: HasManyRepositoryFactory<Book, typeof User.prototype.userId>
                                                                                 ~~~~~~


Found 4 errors in 3 files.

Errors  Files
     1  src/controllers/user-book.controller.ts:57
     1  src/controllers/user-controller.controller.ts:40
     2  src/repositories/user.repository.ts:9
PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo> npm start
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> @loopback/example-todo@6.0.2 prestart
> npm run rebuild

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> @loopback/example-todo@6.0.2 rebuild
> npm run clean && npm run build

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> @loopback/example-todo@6.0.2 clean
> lb-clean *example-todo*.tgz dist *.tsbuildinfo package

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> @loopback/example-todo@6.0.2 build
> lb-tsc

src/controllers/user-book.controller.ts:57:56 - error TS2339: Property 'userId' does not

57     @param.path.number('id') id: typeof User.prototype.userId,
                                                          ~~~~~~

src/controllers/user-controller.controller.ts:40:23 - error TS2322: Type '"userId"' is n

40             exclude: ['userId'],
                         ~~~~~~~~

src/repositories/user.repository.ts:9:25 - error TS2339: Property 'userId' does not exis

9   typeof User.prototype.userId,
                          ~~~~~~


Found 3 errors in 3 files.

Errors  Files
     1  src/controllers/user-book.controller.ts:57
     1  src/controllers/user-controller.controller.ts:40
     1  src/repositories/user.repository.ts:9
PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo> npm start
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> @loopback/example-todo@6.0.2 prestart
> npm run rebuild

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> @loopback/example-todo@6.0.2 rebuild
> npm run clean && npm run build

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> @loopback/example-todo@6.0.2 clean
> lb-clean *example-todo*.tgz dist *.tsbuildinfo package

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> @loopback/example-todo@6.0.2 build
> lb-tsc

src/controllers/user-book.controller.ts:57:56 - error TS2339: Property 'userId' does not

57     @param.path.number('id') id: typeof User.prototype.userId,
                                                          ~~~~~~

src/controllers/user-controller.controller.ts:40:23 - error TS2322: Type '"userId"' is n

40             exclude: ['userId'],
                         ~~~~~~~~


Found 2 errors in 2 files.

Errors  Files
     1  src/controllers/user-book.controller.ts:57
     1  src/controllers/user-controller.controller.ts:40
PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo> npm start
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> @loopback/example-todo@6.0.2 prestart
> npm run rebuild

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> @loopback/example-todo@6.0.2 rebuild
> npm run clean && npm run build

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> @loopback/example-todo@6.0.2 clean
> lb-clean *example-todo*.tgz dist *.tsbuildinfo package

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> @loopback/example-todo@6.0.2 build
> lb-tsc


> @loopback/example-todo@6.0.2 start
> node .

Server is running at http://[::1]:3000
Request POST /users failed with status code 500. Error: Invalid hasMany definition for U
    at resolveHasManyMetadata (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\n
    at createHasManyRepositoryFactory (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-exampl
    at UserRepository.createHasManyRepositoryFactoryFor (C:\Users\pkumar\PUSHPENDRA KUMA82:63)
    at new UserRepository (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\dist\
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at transformValueOrPromise (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at instantiateClass (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mo
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at Binding._getValue (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_m
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at tryCatchFinally (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mod
    at tryWithFinally (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modu
    at Function.runWithBinding (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at Binding.getValue (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mo
    at RequestContext.getValueOrPromise (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-exam
Request POST /users failed with status code 500. Error: Invalid hasMany definition for U
    at resolveHasManyMetadata (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\n
    at createHasManyRepositoryFactory (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-exampl
    at UserRepository.createHasManyRepositoryFactoryFor (C:\Users\pkumar\PUSHPENDRA KUMA82:63)
    at new UserRepository (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\dist\
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at transformValueOrPromise (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at instantiateClass (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mo
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at Binding._getValue (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_m
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at tryCatchFinally (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mod
    at tryWithFinally (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modu
    at Function.runWithBinding (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at Binding.getValue (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mo
    at RequestContext.getValueOrPromise (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-exam
Request POST /users failed with status code 500. Error: Invalid hasMany definition for U
    at resolveHasManyMetadata (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\n
    at createHasManyRepositoryFactory (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-exampl
    at UserRepository.createHasManyRepositoryFactoryFor (C:\Users\pkumar\PUSHPENDRA KUMA82:63)
    at new UserRepository (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\dist\
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at transformValueOrPromise (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at instantiateClass (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mo
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at Binding._getValue (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_m
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at tryCatchFinally (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mod
    at tryWithFinally (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modu
    at Function.runWithBinding (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at Binding.getValue (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mo
    at RequestContext.getValueOrPromise (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-exam
Request POST /users failed with status code 500. Error: Invalid hasMany definition for U
    at resolveHasManyMetadata (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\n
    at createHasManyRepositoryFactory (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-exampl
    at UserRepository.createHasManyRepositoryFactoryFor (C:\Users\pkumar\PUSHPENDRA KUMA82:63)
    at new UserRepository (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\dist\
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at transformValueOrPromise (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at instantiateClass (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mo
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at Binding._getValue (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_m
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at tryCatchFinally (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mod
    at tryWithFinally (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modu
    at Function.runWithBinding (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at Binding.getValue (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mo
    at RequestContext.getValueOrPromise (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-exam
Request POST /books failed with status code 500. TypeError: Cannot read properties of un
    at resolveBelongsToMetadata (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo
    at createBelongsToAccessor (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at BookRepository.createBelongsToAccessorFor (C:\Users\pkumar\PUSHPENDRA KUMAR\loopb
    at new BookRepository (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\dist\
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at transformValueOrPromise (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at instantiateClass (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mo
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at Binding._getValue (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_m
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at tryCatchFinally (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mod
    at tryWithFinally (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modu
    at Function.runWithBinding (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at Binding.getValue (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mo
    at RequestContext.getValueOrPromise (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-exam
Request POST /books failed with status code 500. TypeError: Cannot read properties of un
    at resolveBelongsToMetadata (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo
    at createBelongsToAccessor (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at BookRepository.createBelongsToAccessorFor (C:\Users\pkumar\PUSHPENDRA KUMAR\loopb
    at new BookRepository (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\dist\
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at transformValueOrPromise (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at instantiateClass (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mo
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at Binding._getValue (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_m
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at tryCatchFinally (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mod
    at tryWithFinally (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modu
    at Function.runWithBinding (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at Binding.getValue (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mo
    at RequestContext.getValueOrPromise (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-exam
Request POST /books failed with status code 500. TypeError: Cannot read properties of un
    at resolveBelongsToMetadata (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo
    at createBelongsToAccessor (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at BookRepository.createBelongsToAccessorFor (C:\Users\pkumar\PUSHPENDRA KUMAR\loopb
    at new BookRepository (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\dist\
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at transformValueOrPromise (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at instantiateClass (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mo
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at Binding._getValue (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_m
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at tryCatchFinally (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mod
    at tryWithFinally (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modu
    at Function.runWithBinding (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at Binding.getValue (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mo
    at RequestContext.getValueOrPromise (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-exam
Request POST /books failed with status code 500. TypeError: Cannot read properties of un
    at resolveBelongsToMetadata (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo
    at createBelongsToAccessor (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at BookRepository.createBelongsToAccessorFor (C:\Users\pkumar\PUSHPENDRA KUMAR\loopb
    at new BookRepository (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\dist\
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at transformValueOrPromise (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at instantiateClass (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mo
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at Binding._getValue (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_m
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at tryCatchFinally (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mod
    at tryWithFinally (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modu
    at Function.runWithBinding (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at Binding.getValue (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mo
    at RequestContext.getValueOrPromise (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-exam
Request POST /books failed with status code 500. TypeError: Cannot read properties of un
    at resolveBelongsToMetadata (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo
    at createBelongsToAccessor (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at BookRepository.createBelongsToAccessorFor (C:\Users\pkumar\PUSHPENDRA KUMAR\loopb
    at new BookRepository (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\dist\
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at transformValueOrPromise (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at instantiateClass (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mo
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at Binding._getValue (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_m
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at tryCatchFinally (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mod
    at tryWithFinally (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modu
    at Function.runWithBinding (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at Binding.getValue (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mo
    at RequestContext.getValueOrPromise (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-exam
Request POST /books failed with status code 500. TypeError: Cannot read properties of un
    at resolveBelongsToMetadata (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo
    at createBelongsToAccessor (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at BookRepository.createBelongsToAccessorFor (C:\Users\pkumar\PUSHPENDRA KUMAR\loopb
    at new BookRepository (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\dist\
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at transformValueOrPromise (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at instantiateClass (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mo
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at Binding._getValue (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_m
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at tryCatchFinally (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mod
    at tryWithFinally (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modu
    at Function.runWithBinding (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at Binding.getValue (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mo
    at RequestContext.getValueOrPromise (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-exam
Request POST /books failed with status code 500. TypeError: Cannot read properties of un
    at resolveBelongsToMetadata (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo
    at createBelongsToAccessor (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at BookRepository.createBelongsToAccessorFor (C:\Users\pkumar\PUSHPENDRA KUMAR\loopb
    at new BookRepository (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\dist\
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at transformValueOrPromise (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at instantiateClass (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mo
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at Binding._getValue (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_m
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modules\@loopback\co
    at tryCatchFinally (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mod
    at tryWithFinally (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_modu
    at Function.runWithBinding (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\
    at Binding.getValue (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\node_mo
    at RequestContext.getValueOrPromise (C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-exam
Terminate batch job (Y/N)?
Terminate batch job (Y/N)? y
PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo> cd ..
PS C:\Users\pkumar\PUSHPENDRA KUMAR> cd .\loopback4-example-todo\
PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo> cd
PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo> lb4 app
? Project name: Cotegory
>> Invalid npm package name: Cotegory
PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo> lb4 app
? Project name: edprime
? Project description: edprime
? Project root directory: edprime
? Application class name: EdprimeApplication
? Select features to enable in the project Enable eslint, Enable prettier, Enable mocha,
    force .yo-rc.json
   create .eslintignore
   create .eslintrc.js
   create .mocharc.json
   create .prettierignore
   create .prettierrc
   create DEVELOPING.md
   create package.json
   create tsconfig.json
   create .vscode\launch.json
   create .vscode\settings.json
   create .vscode\tasks.json
   create .gitignore
   create .dockerignore
   create Dockerfile
   create README.md
   create public\index.html
   create src\application.ts
   create src\index.ts
   create src\migrate.ts
   create src\openapi-spec.ts
   create src\sequence.ts
   create src\controllers\index.ts
   create src\controllers\ping.controller.ts
   create src\controllers\README.md
   create src\datasources\README.md
   create src\models\README.md
   create src\repositories\README.md
   create src\__tests__\README.md
   create src\__tests__\acceptance\home-page.acceptance.ts
   create src\__tests__\acceptance\ping.controller.acceptance.ts
   create src\__tests__\acceptance\test-helper.ts
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins
npm WARN config cache-min This option has been deprecated in favor of `--prefer-offline`
npm WARN deprecated stable@0.1.8: Modern JS already guarantees Array#sort() is a stable en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort#browser_compatibility

added 567 packages, and audited 568 packages in 40s

76 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities

Application edprime was created in edprime.

Next steps:

$ cd edprime
$ npm start

PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo> cd edprime
PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\edprime> npm start
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> edprime@0.0.1 prestart
> npm run rebuild

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> edprime@0.0.1 rebuild
> npm run clean && npm run build

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> edprime@0.0.1 clean
> lb-clean dist *.tsbuildinfo .eslintcache

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` ins

> edprime@0.0.1 build
> lb-tsc


> edprime@0.0.1 start
> node -r source-map-support/register .

Server is running at http://[::1]:3000
Try http://[::1]:3000/ping
Terminate batch job (Y/N)?
Terminate batch job (Y/N)? y
PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\edprime> lb4 modelrime> lb4 model
? Model class name: category                                   with an ID)
? Please select the model base class Entity (A persisted model with an ID)
? Allow additional (free-form) properties? Yes
Model Category will be created in src/models/category.model.ts


Let's add a property to Category
Enter an empty property name when done

? Enter the property name: _id
? Property type: string
? Is _id the ID property? Yes
? Is _id generated automatically? Yes

Let's add another property to Category
Enter an empty property name when done

? Enter the property name: edition
? Property type: string
? Is it required?: Yes

Let's add another property to Category
Enter an empty property name when done

? Enter the property name: editionYear
? Property type: number
? Is it required?: Yes

Let's add another property to Category
Enter an empty property name when done

? Enter the property name: language
? Property type: string
? Is it required?: Yes

Let's add another property to Category
Enter an empty property name when done

? Enter the property name: publisher
? Property type: string
? Is it required?: Yes

Let's add another property to Category
Enter an empty property name when done

? Enter the property name: publisherYear
? Property type: number
? Is it required?: Yes

Let's add another property to Category
Enter an empty property name when done

? Enter the property name: series
? Property type: number
? Is it required?: Yes

Let's add another property to Category
Enter an empty property name when done

? Enter the property name: author
? Property type: string
? Is it required?: Yes

Let's add another property to Category
Enter an empty property name when done

? Enter the property name: price
? Property type: number
? Is it required?: Yes

Let's add another property to Category
Enter an empty property name when done

? Enter the property name: quantity
? Property type: number
? Is it required?: Yes

Let's add another property to Category
Enter an empty property name when done

? Enter the property name:
   create src\models\category.model.ts
   update src\models\index.ts

Model Category was/were created in src\models

PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\edprime> npm install loopback-connector-mongodb --save
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

added 9 packages, and audited 577 packages in 6s

76 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\edprime> lb4 datasource mongoDs --connector mongoDB



? Select the connector for mongoDs:  MongoDB (supported by StrongLoop)
? Connection String url to override other settings (eg: mongodb://username:password@hostname:port/database):
? host: localhost
? port: 27017
? user:
? password: [hidden]
? database: edPrime
? Feature supported by MongoDB v3.1.0 and above: Yes
   create src\datasources\mongo-ds.datasource.ts
   update src\datasources\index.ts

Datasource MongoDs was/were created in src\datasources

PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\edprime> lb4 repository
? Select the datasource MongoDsDatasource
? Select the model(s) you want to generate a repository for Category
   create src\repositories\category.repository.ts
   update src\repositories\index.ts

Repository CategoryRepository was/were created in src\repositories

PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\edprime> lb4 controEory
? What is the name of your CRUD repository? CategoryRepository
? What is the name of ID property? id
? What is the type of your ID? number
? Is the id omitted when creating a new instance? Yes
? What is the base HTTP path name of the CRUD operations? /categories
   create src\controllers\category-controller.controller.ts
   update src\controllers\index.ts

Controller CategoryController was/were created in src\controllers

PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\edprime> npm start
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> edprime@0.0.1 prestart
> npm run rebuild

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> edprime@0.0.1 rebuild
> npm run clean && npm run build

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> edprime@0.0.1 clean
> lb-clean dist *.tsbuildinfo .eslintcache

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> edprime@0.0.1 build
> lb-tsc

src/controllers/category-controller.controller.ts:111:45 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

111     return this.categoryRepository.findById(id, filter);
                                                ~~

src/controllers/category-controller.controller.ts:129:46 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

129     await this.categoryRepository.updateById(id, category);
                                                 ~~

src/controllers/category-controller.controller.ts:140:47 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

140     await this.categoryRepository.replaceById(id, category);
                                                  ~~

src/controllers/category-controller.controller.ts:148:46 - error TS2345: Argument of type 'number' is not assignable to parameter of type 'string'.

148     await this.categoryRepository.deleteById(id);
                                                 ~~


Found 4 errors in the same file, starting at: src/controllers/category-controller.controller.ts:111

PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\edprime> npm start
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> edprime@0.0.1 prestart
> npm run rebuild

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> edprime@0.0.1 rebuild
> npm run clean && npm run build

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> edprime@0.0.1 clean
> lb-clean dist *.tsbuildinfo .eslintcache

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> edprime@0.0.1 build
> lb-tsc


> edprime@0.0.1 start
> node -r source-map-support/register .

Server is running at http://[::1]:3000
Try http://[::1]:3000/ping
Terminate batch job (Y/N)?
Terminate batch job (Y/N)? y
PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\edprime> lb4 controller
? Controller class name: category
Controller Category will be created in src/controllers/category.controller.ts

? What kind of controller would you like to generate? REST Controller with CRUD functions
? What is the name of the model to use with this CRUD repository? Category
? What is the name of your CRUD repository? CategoryRepository
? What is the name of ID property? y
? What is the type of your ID? string
? Is the id omitted when creating a new instance? Yes
? What is the base HTTP path name of the CRUD operations? /y
   create src\controllers\category.controller.ts
   update src\controllers\index.ts

Controller Category was/were created in src\controllers

PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\edprime> npm start
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> edprime@0.0.1 prestart
> npm run rebuild

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> edprime@0.0.1 rebuild
> npm run clean && npm run build

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> edprime@0.0.1 clean
> lb-clean dist *.tsbuildinfo .eslintcache

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> edprime@0.0.1 build
> lb-tsc

src/controllers/index.ts:2:15 - error TS2307: Cannot find module './categorycontroller' or its corresponding type declarations.

2 export * from './categorycontroller';
                ~~~~~~~~~~~~~~~~~~~~~~


Found 1 error in src/controllers/index.ts:2

PS C:\Users\pkumar\PUSHPENDRA KUMAR\loopback4-example-todo\edprime> npm start
npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> edprime@0.0.1 prestart
> npm run rebuild

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> edprime@0.0.1 rebuild
> npm run clean && npm run build

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> edprime@0.0.1 clean
> lb-clean dist *.tsbuildinfo .eslintcache

npm WARN config global `--global`, `--local` are deprecated. Use `--location=global` instead.

> edprime@0.0.1 build
> lb-tsc


> edprime@0.0.1 start
> node -r source-map-support/register .

Server is running at http://[::1]:3000
Try http://[::1]:3000/ping
