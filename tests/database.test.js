/**
 * @jest-environment node
 */

const mongoose = require('mongoose');
const { MongoMemoryServer } = require('mongodb-memory-server');

const mongod = new MongoMemoryServer();

const config = require('../util/config')
const Registree = require('../models/Registree');
const memorySever = require('../util/memoryServerRepository');

// const DB = `${config.MONGO_URI}/${config.DB_NAME}`;

const registreeMock = {
    firstName : "mock",
    lastName: "mock",
    email: "mock@email.com",
    date: "2020-01-01"
} 

beforeEach( async () => await memorySever.connect() );
afterEach( async () => await memorySever.disconnect() );
describe('Mongo Database ', () => {
    describe('Registree Model', () => {
        it('can connect to the database', async () => {;
            expect(mongoose.connection.readyState).toEqual(1);
        });

        it('can CREATE valid registree in database', () => {
            expect(async () => await Registree.create(registreeMock)
                    ).not.toThrow();
        });
        it('will throw an error when firstName is invalid', async () => {
            const invalidRegistreeMock = {...registreeMock, firstName:"123"};
            Registree.create(invalidRegistreeMock)
                .catch(error => {
                    expect(error).not.toBeNull();
                });
        });
        it('will throw an error when lastName is invalid', async () => {
            const invalidRegistreeMock = {...registreeMock, lastName:"123"};
            Registree.create(invalidRegistreeMock)
                .catch(error => {
                    expect(error).not.toBeNull();
                });
        });
        it('will throw an error when email is invalid', async () => {
            const invalidRegistreeMock = {...registreeMock, email:"123"};
            Registree.create(invalidRegistreeMock)
                .catch(error => {
                    expect(error).not.toBeNull();
                });
        });
        it('will throw an error when date is invalid', async () => {
            const invalidRegistreeMock = {...registreeMock, firstName:"123"};
            Registree.create(invalidRegistreeMock)
                .catch(error => {
                    expect(error).not.toBeNull();
                });
        });
    });
});