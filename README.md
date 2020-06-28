# Event Sign Up

## Description
This application is an example of a fullstack web-form, that includes validation and testing. It was made using the MERN stack and Redux. Here is the stack:
> MongoDB, ExpressJS, React, NodeJS

All persistent state is saved on MongoDB Atlas and managed using Redux in the application.
This app is hosted on Heroku at this [link](https://event-signup-haskin.herokuapp.com).

## Quick Start

### Docker App Image
This application can be pulled from docter hub using the following command:
>docker pull haskin/event-signup:app

When using docker run, you most publish a host port to the container port 3030.
>docker run -p [host_port]:3030 ...

### Normal Setup (Non-Docker)

In order to run the application you need to have a .env file with the properties:
>MONGO_URI, DB_NAME

MONGO_URI should be set to the URI of the mongo database and DB_NAME set to the name of that database.
Once that is done follow these steps:

```bash
# Install dependencies
npm install

# Run the server
npm run server

# Run the client
npm run client

# Server runs on http://localhost:3030 and client run on http://localhost:3000
```


## Testing
There are 30 tests included, which were made using Jest, react-testing-library, and cypress.

### Docker Test Images
Docker tests for the server and client can be pulled with the following commands:
```
docker pull haskin/event-signup:server-test
docker pull haskin/event-signup:client-test
```
### Testing commands 

```bash
# Run Server Tests
npm run server-test

# Run Client Tests
npm run client-test

# Run End-to-End Test 
#### Requirements: NODE_ENV ="test", Server & Client must be running
npm run cypress

```
## Testing Directories

#### Client Tests
> ./client/src/components/_\_tests_ 

#### Server Tests
> ./tests

#### End-To-End Tests
> ./cypress/integration/e2e.spec.js


## Validation
Validataion is done three times. Once using HTML5 form validation, before sending the data using a fetch in the client, and before saving to the database. Here is where you can find validation files:
>/client/src/utils/validated.js

>/models/Registree.js
_
