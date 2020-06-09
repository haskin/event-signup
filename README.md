# Event Sign Up

## Description
This application is an example of a fullstack web-form, that includes validation and testing. It was made using the MERN stack and Redux. Here is the stack:
> MongoDB, ExpressJS, React, NodeJS

## Quick Start
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

All persistent state is saved on MongoDB Atlas and managed using Redux in the application.
This app is hosted on Heroku at this [link](https://event-signup-haskin.herokuapp.com).

## Validation
Validataion is done three times. Once using HTML5 form validation, before sending the data using a fetch in the client, and before saving to the database. Here is where you can find validation files:
>/client/src/utils/validated.js
>/models/Registree.js

## Testing
On the client side testing is done using two libraries: Jest and Enzyme. Most of the tests are snapshots.
They can be seen here:
>/client/src/components/_\_tests__

On the server side I used the NodeJS built-in assert module to test the server.
