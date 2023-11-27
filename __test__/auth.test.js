const fetch = require('node-fetch');

const url = 'http://localhost:3000';

describe('Test auth API', () => {
    test('User Not Registered | Should return 404', async () => {
        const response = await fetch(`${url}/api/auth`, {
            method: 'POST',
            body: JSON.stringify({
                email: 'hjfklasdkfjhsf@gmail.com',
                password: '123456',
                rememberMe: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const responseJSON = await response.json();
        expect(responseJSON.status).toBe(404);
        expect(responseJSON.message).toBe('User not registered');
    });

    test('Wrong Password | Should return 401', async () => {
        const response = await fetch(`${url}/api/auth`, {
            method: 'POST',
            body: JSON.stringify({
                email: 'owner@gmail.com',
                password: '123456',
                rememberMe: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const responseJSON = await response.json();
        expect(responseJSON.status).toBe(401);
        expect(responseJSON.message).toBe('Password incorrect');
    });

    test('Login Success | Should return 200', async () => {
        const response = await fetch(`${url}/api/auth`, {
            method: 'POST',
            body: JSON.stringify({
                email: 'owner@gmail.com',
                password: 'owner',
                rememberMe: true
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const responseJSON = await response.json();
        expect(responseJSON.status).toBe(200);
        expect(responseJSON).toHaveProperty('token');
        expect(responseJSON).toHaveProperty('payload');
        expect(responseJSON.msg).toEqual('Login successful');
    });
});
