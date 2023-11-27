const { authorizedOwner } = require('../src/app/api/authorized'); // Adjust the path
const jwt = require('jsonwebtoken');

jest.mock('jsonwebtoken');

describe('authorizedOwner function', () => {
    const mockRequest = (authorization) => ({
        headers: {
            get: jest.fn().mockReturnValue(authorization),
        },
    });

    const mockAuthorized = jest.fn();
    jwt.verify.mockImplementation(() => ({ role: 'Owner' }));

    beforeEach(() => {
        jwt.verify.mockClear();
        mockAuthorized.mockClear();
    });

    test('should authorize an owner', async () => {
        mockAuthorized.mockResolvedValue({ status: 200 });
        const req = mockRequest('Bearer validToken');

        const response = await authorizedOwner(req);

        expect(response).toEqual({ message: 'You are authorized', status: 200 });
    });

    test('should deny access if not owner', async () => {
        jwt.verify.mockImplementation(() => ({ role: 'User' }));
        mockAuthorized.mockResolvedValue({ status: 200 });
        const req = mockRequest('Bearer validToken');

        const response = await authorizedOwner(req);

        expect(response).toEqual({ message: 'Access denied', status: 403 });
    });

    // Additional tests for other scenarios...
});
