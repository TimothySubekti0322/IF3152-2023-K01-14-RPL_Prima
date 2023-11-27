const jwt = require('jsonwebtoken');
const { authorized } = require('../src/app/api/authorized');

// Spy on the jwt.verify method and keep its original implementation
jest.spyOn(jwt, 'verify');

beforeEach(() => {
    // Clear any previous calls to the mock
    jwt.verify.mockClear();
});

describe('authorized function', () => {
    it('should return 401 if Authorization header is missing', async () => {
        const req = { headers: { get: () => null } }; // Simulate missing Authorization header
        const response = await authorized(req);
        expect(response).toEqual({ message: "Authorization header missing", status: 401 });
    });

    it('should return 401 if token is missing', async () => {
        const req = { headers: { get: () => "Bearer " } }; // Simulate missing token
        const response = await authorized(req);
        expect(response).toEqual({ message: "Token missing", status: 401 });
    });

    it('should return 401 for an invalid token', async () => {
        jwt.verify.mockImplementationOnce(() => {
            throw new Error('Invalid token');
        });
        const req = { headers: { get: () => "Bearer some-invalid-token" } }; // Simulate invalid token
        const response = await authorized(req);
        expect(response).toEqual({ message: "Invalid token", status: 401 });
    });

    it('should return 200 for a valid token', async () => {
        jwt.verify.mockReturnValueOnce({ id: 'user-id' }); // Mock valid token decoding
        const req = { headers: { get: () => "Bearer some-valid-token" } }; // Simulate valid token
        const response = await authorized(req);
        expect(response).toEqual({ message: "Token is valid", status: 200 });
    });
});

