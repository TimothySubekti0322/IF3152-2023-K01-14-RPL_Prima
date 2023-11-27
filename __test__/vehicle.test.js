const fetch = require("node-fetch");
const signin = require('./signin');

const url = "http://localhost:3000";

describe("Vehicle", () => {

    var idNewVehicle;

    describe("GET /api/vehicle", () => {
        test("Unauthorized Get Vehicle", async () => {
            const response = await fetch(`${url}/api/vehicle`);
            expect(response.status).toBe(401);
        });

        test("Get Vehicle", async () => {
            const token = await signin.getToken();
            const response = await fetch(`${url}/api/vehicle`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const responseJSON = await response.json();
            expect(response.status).toBe(200);
        });
    });

    describe("POST /api/vehicle", () => {
        test("Unauthorized Add New Vehicle", async () => {
            const response = await fetch(`${url}/api/vehicle`, {
                method: 'POST',
                body: JSON.stringify({
                    plate : "D 1234 ABC",
                    vehicleType : "SUV",
                    transmission : "Manual",
                    distance : 7000,
                    lastService : "21-11-2023"
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            expect(response.status).toBe(401);
        });

        test("Add New Vehicle", async () => {
            const token = await signin.getToken();
            const response = await fetch(`${url}/api/vehicle`, {
                method: 'POST',
                body: JSON.stringify({
                    plate : "D 1234 ABC",
                    vehicleType : "SUV",
                    transmission : "Manual",
                    distance : 7000,
                    lastService : "21-11-2023"
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const responseJSON = await response.json();
            expect(response.status).toBe(201);
            expect(responseJSON.data).not.toBeNull();
            idNewVehicle = responseJSON.data.id;
        });
    });

    describe("GET /api/vehicle/:id", () => {
        test("Unauthorized Get Vehicle By Id", async () => {
            const response = await fetch(`${url}/api/vehicle/${idNewVehicle}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            expect(response.status).toBe(401);
        });

        test("Get Vehicle By Id", async () => {
            const token = await signin.getToken();
            const response = await fetch(`${url}/api/vehicle/${idNewVehicle}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const responseJSON = await response.json();
            expect(response.status).toBe(200);
            expect(responseJSON.data).toEqual({
                id: idNewVehicle,
                plate : "D 3488 LPA",
                vehicleType : "Sport",
                transmission : "AMT",
                distance : 9073,
                lastService : "2022-08-15",
                status : "available"
            });
        });
    });

    describe("PATCH /api/vehicle/:id", () => {
        test("Unauthorized Update Vehicle", async () => {
            const response = await fetch(`${url}/api/vehicle/${idNewVehicle}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    plate : "D 1234 ABD",
                    vehicleType : "SUV",
                    transmission : "Manual",
                    distance : 7000,
                    lastService : "21-11-2023"
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            expect(response.status).toBe(401);

        });

        test("Update Vehicle", async () => {
            const token = await signin.getToken();
            const response = await fetch(`${url}/api/vehicle/${idNewVehicle}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    plate : "D 1234 ABD",
                    vehicleType : "SUV",
                    transmission : "Manual",
                    distance : 7000,
                    lastService : "21-11-2023"
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const responseJSON = await response.json();
            expect(response.status).toBe(200);
            expect(responseJSON.data).not.toBeNull();
            expect(responseJSON.data.plate).toBe("D 1234 ABD");
        });
    });

    describe("DELETE /api/vehicle/:id", () => {
        test("Unauthorized Delete Vehicle", async () => {
            const response = await fetch(`${url}/api/vehicle/${idNewVehicle}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            expect(response.status).toBe(401);
        });

        test("Delete Vehicle", async () => {
            const token = await signin.getToken();
            const response = await fetch(`${url}/api/vehicle/${idNewVehicle}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            const responseJSON = await response.json();
            expect(response.status).toBe(200);
            expect(responseJSON.data).toEqual({
                id: idNewVehicle,
                plate : "D 1234 ABD",
                vehicleType : "SUV",
                transmission : "Manual",
                distance : 7000,
                lastService : "21-11-2023",
            });

        });
    });
})