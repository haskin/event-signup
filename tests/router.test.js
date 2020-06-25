const request = require('supertest');
const express = require('express');

const router = require('../router');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

const Registree = require('../models/Registree');

describe('Registrees Routing and API', () => {

    describe('GET /api/registrees', () => {
        it('responds correctly when database is empty', async () => {
            // Resolve the GET with an empty array
            const mockFind = jest.spyOn(Registree, "find").mockImplementation(() =>
                Promise.resolve([]));
            const response = await request(app).get('/api/registrees');
            
            expect(mockFind).toHaveBeenCalledTimes(1);
            expect(response.status).toEqual(204);
            mockFind.mockRestore();
        });

        it('responds correctly when database has data', async () => {
            const response = await request(app).get('/api/registrees')
            if(response.body.length > 0){
                expect(response.header['content-type']).toEqual('application/json; charset=utf-8');
                expect(response.status).toEqual(200);
            }
            else 
                expect(response.status).toEqual(204);
        });

        it('responds correctly when database has an error', async () => {
            const mockFind = jest.spyOn(Registree, "find").mockImplementation(() => {
                throw new Error('User not found')
            });

            const response = await request(app).get('/api/registrees');
            expect(mockFind).toHaveBeenCalledTimes(1);
            expect(response.status).toEqual(400);
            mockFind.mockRestore();
        });
    });
    describe('POST /api/registrees', () => {
        it('responds correctly when the save to database is valid', async () => {
            // Creates a mock for save() that is always successful
            const mockDatabaseSave = jest
                                        .spyOn(Registree.prototype, 'save')
                                        .mockImplementation(  () => {
                                            return new Promise(resolve => resolve([]) )
                                        });
            const response  = await request(app).post('/api/registrees');
            console.log(response.message);
            expect(mockDatabaseSave).toHaveBeenCalledTimes(1);
            expect(response.status).toEqual(201);
            mockDatabaseSave.mockRestore();
        });

        it('responds correctly with 409 if the saved entry is a duplicate', async () => {
            // Mock that returns a duplicate error on a database save
            const mockDatabaseSave = jest
                                        .spyOn(Registree.prototype, 'save')
                                        .mockImplementation(  () => {
                                            return new Promise((resolve, reject) => {
                                                const error = new Error();
                                                error.code = 11000;
                                                reject( error )
                                            })
                                        });
            const response  = await request(app).post('/api/registrees');      
            expect(mockDatabaseSave).toHaveBeenCalledTimes(1);
            expect(response.status).toEqual(409);
            mockDatabaseSave.mockRestore();
        }) 
        
        it('responds correctly with 400 if there was an unforeseen', async () => {
            // Database save mocked to return an error
            const mockDatabaseSave = jest
                                        .spyOn(Registree.prototype, 'save')
                                        .mockImplementation(  () => {
                                            return new Promise((resolve, reject) => {
                                                const error = new Error();
                                                reject( error )
                                            })
                                        });
            const response  = await request(app).post('/api/registrees');      
            expect(mockDatabaseSave).toHaveBeenCalledTimes(1);
            expect(response.status).toEqual(400);
            mockDatabaseSave.mockRestore();
        })
    }); 
});