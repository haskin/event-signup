const request = require('supertest');
const express = require('express');

const router = require('../router');
const app = express();
app.use(express.urlencoded({ extended: false }));
app.use('/', router);

const Registree = require('../models/Registree');

describe('Routing and API', () => {

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
});