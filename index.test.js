const request = require('supertest');
const app = require('./index');
let server;

beforeAll(() => {
  // Start the server and assign it to the server variable
  server = app.listen(0); // Using 0 will let the system pick an available port
});

afterAll((done) => {
  // Close the server when tests are done
    server.close(done);
});

//Retrieve all pets from the pets array. Send the pets array as a JSON response
describe('GET /api/v1/pets', () => {
    it('responds with an array of pets', async () => {
        const response = await request(app).get('/api/v1/pets');
        expect(response.statusCode).toBe(200);
        expect(response.body).toBeInstanceOf(Array);
    });
});

//Find a pet in the pets array where pet name equals the provided name
//If a pet is found, send it as a JSON response
//Otherwise, send a 404 not found response
describe('GET /api/v1/pets/:name', () => {
    it('responds with a single pet', async () => {
        const response = await request(app).get('/api/v1/pets/Fido');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('name', 'Fido');
    });
});

//Find a pet in the pets array where pet owner equals the provided owner's name
//If a pet is found, send it as a JSON response
//Otherwise, send a 404 not found response
describe('GET /api/v1/pets/owner', () => {
    it('responds with a pet for a given owner', async () => {
        const response = await request(app).get('/api/v1/pets/owner?owner=John');
        expect(response.statusCode).toBe(200);
        expect(response.body).toHaveProperty('owner', 'John');
    });
});
