const fetch = require('node-fetch');

const url = "http://localhost:3000";

async function getToken() {
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
    return responseJSON.token;
}

module.exports = { getToken };