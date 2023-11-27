const fetch = require("node-fetch");
const signin = require('./signin');

const url = "http://localhost:3000";

describe("Instructor", () => {

    var idNewInstructor;
    var newNIK;

    describe("GET /api/instructor", () => {
        test("Unauthorized Get Instructor", async () => {
            const response = await fetch(`${url}/api/instructor`);
            expect(response.status).toBe(401);
        });

        test("Get Instructor", async () => {
            const token = await signin.getToken();
            const response = await fetch(`${url}/api/instructor`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            expect(response.status).toBe(200);
        });
    });

    describe("POST /api/instructor", () => {
        test("Unauthorized Add New Instructor", async () => {
            const response = await fetch(`${url}/api/instructor`, {
                method: 'POST',
                body: JSON.stringify({
                    name: "lala",
                    nik: "5344267188263551",
                    address: "tubagus ismail 2",
                    phone: "087236152412"
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            expect(response.status).toBe(401);
        });

        test("Add New Instructor", async () => {
            const token = await signin.getToken();
            const response = await fetch(`${url}/api/instructor`, {
                method: 'POST',
                body: JSON.stringify({
                    name: "lala",
                    nik: String(Math.floor(Math.random() * 10000000000000000)),
                    address: "tubagus ismail 2",
                    phone: "087236152412"
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const responseJSON = await response.json();
            expect(response.status).toBe(201);
            expect(responseJSON.data).not.toBeNull();
            idNewInstructor = responseJSON.data.id;
            newNIK = responseJSON.data.nik;
        });
    });

    describe("GET /api/instructor/:id", () => {
        test("Unauthorized Get Instructor By Id", async () => {
            const response = await fetch(`${url}/api/instructor/${idNewInstructor}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            expect(response.status).toBe(401);
        });

        test("Get Instructor By Id", async () => {
            const token = await signin.getToken();
            const response = await fetch(`${url}/api/instructor/${idNewInstructor}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const responseJSON = await response.json();
            expect(response.status).toBe(200);
            expect(responseJSON.data).toEqual({
                id: idNewInstructor,
                name: "lala",
                nik: newNIK,
                address: "tubagus ismail 2",
                phone: "087236152412"
            });
        });
    });

    describe("PATCH /api/instructor/:id", () => {
        test("Unauthorized Update Instructor", async () => {
            const response = await fetch(`${url}/api/instructor/${idNewInstructor}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    name: "Mario",
                    nik: "5344267188263551",
                    address: "tubagus ismail 2",
                    phone: "087236152412"
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            expect(response.status).toBe(401);

        });

        test("Update Instructor", async () => {
            const token = await signin.getToken();
            const response = await fetch(`${url}/api/instructor/${idNewInstructor}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    name: "Mario",
                    nik: "5344267188263551",
                    address: "tubagus ismail 2",
                    phone: "087236152412"
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const responseJSON = await response.json();
            expect(response.status).toBe(200);
            expect(responseJSON.data).not.toBeNull();
            expect(responseJSON.data.name).toBe("Mario");
            expect(responseJSON.data.nik).toBe("5344267188263551");
        });
    });

    describe("DELETE /api/instructor/:id", () => {
        test("Unauthorized Delete Instructor", async () => {
            const response = await fetch(`${url}/api/instructor/${idNewInstructor}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            expect(response.status).toBe(401);
        });

        test("Delete Instructor", async () => {
            const token = await signin.getToken();
            const response = await fetch(`${url}/api/instructor/${idNewInstructor}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            const responseJSON = await response.json();
            expect(response.status).toBe(200);
            expect(responseJSON.data).toEqual({
                id: idNewInstructor,
                name: "Mario",
                nik: "5344267188263551",
                address: "tubagus ismail 2",
                phone: "087236152412"
            });

        });
    });
})
