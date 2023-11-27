const fetch = require("node-fetch");
const signin = require('./signin');

const url = "http://localhost:3000";

const vehicleId = 2;

describe("Vehicle Status", () => {
    describe("GET /api/vehicle/status", () => {
        test("Unauthorized Get Vehicle Type", async () => {
            const response = await fetch(`${url}/api/vehicle/status`);
            expect(response.status).toBe(401);
        });

        test("Get Vehicle Type", async () => {
            const token = await signin.getToken();
            const response = await fetch(`${url}/api/vehicle/status`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const responseJSON = await response.json();
            expect(response.status).toBe(200);
            expect(responseJSON.length).toBeGreaterThan(0);
        });
    });

    describe("PATCH /api/vehicle/status", () => {
        test("Unauthorized Update Vehicle Type", async () => {
            const response = await fetch(`${url}/api/vehicle/status/${vehicleId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    status: "Available"
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            expect(response.status).toBe(401);
        });

        test("Update Vehicle Type", async () => {
            const token = await signin.getToken();
            const response = await fetch(`${url}/api/vehicle/status/${vehicleId}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    status: "Available"
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            expect(response.status).toBe(200);
        });
    });

    describe("GET /api/vehicle/status/:id", () => {
        test("Unauthorized Get Vehicle Type By Id", async () => {
            const response = await fetch(`${url}/api/vehicle/status/${vehicleId}`);
            expect(response.status).toBe(401);
        });

        test("Get Vehicle Type By Id", async () => {
            const token = await signin.getToken();
            const response = await fetch(`${url}/api/vehicle/status/${vehicleId}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const responseJSON = await response.json();
            expect(response.status).toBe(200);
            expect(responseJSON.data).not.toBeNull();
        });
    });
});
