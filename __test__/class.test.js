const fetch = require("node-fetch");
const signin = require('./signin');

const url = "http://localhost:3000";

describe("Class", () => {

    var idNewClass;

    describe("GET /api/class", () => {
        test("Get Class", async () => {
            const response = await fetch(`${url}/api/class`);
            const responseJSON = await response.json();
            expect(response.status).toBe(200);
        });
    });

    describe("POST /api/class", () => {
        test("Unauthorized Add New Class", async () => {
            const response = await fetch(`${url}/api/class`, {
                method: 'POST',
                body: JSON.stringify({
                    price: "250000",
                    session: "3",
                    transmission: "Automatic",
                    vehicleType: "SUV"
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            expect(response.status).toBe(401);
        });

        test("Add New Class", async () => {
            const token = await signin.getToken();
            const response = await fetch(`${url}/api/class`, {
                method: 'POST',
                body: JSON.stringify({
                    price: "250000",
                    session: "3",
                    transmission: "Automatic",
                    vehicleType: "SUV"
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const responseJSON = await response.json();
            expect(response.status).toBe(201);
            expect(responseJSON.data).not.toBeNull();
            expect(responseJSON.data.duration).toBe(2 * responseJSON.data.session);
            idNewClass = responseJSON.data.id;
        });
    });

    describe("GET /api/class/:id", () => {
        test("Get Class By Id", async () => {
            const response = await fetch(`${url}/api/class/${idNewClass}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            const responseJSON = await response.json();
            expect(response.status).toBe(200);
            expect(responseJSON.data).toEqual({
                id: idNewClass,
                price: 250000,
                duration: 6,
                session: 3,
                transmission: "Automatic",
                vehicleType: "SUV"
            });
        });
    });

    describe("PATCH /api/class/:id", () => {
        test("Unauthorized Update Class", async () => {
            const response = await fetch(`${url}/api/class/${idNewClass}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    price: "250000",
                    session: "3",
                    transmission: "Automatic",
                    vehicleType: "SUV"
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            expect(response.status).toBe(401);

        });

        test("Update Class", async () => {
            const token = await signin.getToken();
            const response = await fetch(`${url}/api/class/${idNewClass}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    price: "300000",
                    session: "2",
                    transmission: "Automatic",
                    vehicleType: "SUV"
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const responseJSON = await response.json();
            expect(response.status).toBe(200);
            expect(responseJSON.data).not.toBeNull();
            expect(responseJSON.data.price).toBe(300000);
        });
    });

    describe("DELETE /api/class/:id", () => {
        test("Unauthorized Delete Class", async () => {
            const response = await fetch(`${url}/api/class/${idNewClass}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            expect(response.status).toBe(401);
        });

        test("Delete Class", async () => {
            const token = await signin.getToken();
            const response = await fetch(`${url}/api/class/${idNewClass}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            const responseJSON = await response.json();
            expect(response.status).toBe(200);
            expect(responseJSON.data).toEqual({
                id: idNewClass,
                price: 300000,
                duration: 4,
                session: 2,
                transmission: "Automatic",
                vehicleType: "SUV"
            });
        });
    })
});

