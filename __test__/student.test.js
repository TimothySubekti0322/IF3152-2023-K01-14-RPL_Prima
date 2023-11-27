const fetch = require("node-fetch");
const signin = require('./signin');

const url = "http://localhost:3000";

describe("Student", () => {

    var idNewStudent;


    describe("GET /api/student", () => {
        test("Unauthorized Get Student", async () => {
            const response = await fetch(`${url}/api/student`);
            expect(response.status).toBe(401);
        });

        test("Get Student", async () => {

            const token = await signin.getTokenAdmin();
            const response = await fetch(`${url}/api/student`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            expect(response.status).toBe(200);
        });
    });

    describe("POST /api/student", () => {

        test("Add New Student", async () => {
            const token = await signin.getTokenAdmin();
            const response = await fetch(`${url}/api/student`, {
                method: 'POST',
                body: JSON.stringify({
                    name: "Toro",
                    classId: "1",
                    phone: "081255243133",
                    address: "Jl. Cigadung no 2"
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const responseJSON = await response.json();
            expect(response.status).toBe(201);
            expect(responseJSON.data).not.toBeNull();
            idNewStudent = responseJSON.data.id;
        });
    });

    describe("GET /api/student/:id", () => {
        test("Unauthorized Get Student By Id", async () => {
            const response = await fetch(`${url}/api/student/${idNewStudent}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            expect(response.status).toBe(401);
        });

        test("Get Student By Id", async () => {
            const token = await signin.getTokenAdmin();
            const response = await fetch(`${url}/api/student/${idNewStudent}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const responseJSON = await response.json();
            expect(response.status).toBe(200);
            expect(responseJSON.data).toEqual({
                id: idNewStudent,
                name: "Toro",
                classId: 1,
                phone: "081255243133",
                address: "Jl. Cigadung no 2",
                status: "Registrant"
            });
        });
    });

    describe("PATCH /api/student/:id", () => {
        test("Unauthorized Update Student", async () => {
            const response = await fetch(`${url}/api/student/${idNewStudent}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    name: "Bobba",
                    classId: 1,
                    phone: "088827364510",
                    address: "Jl. Cikapayung Indah no 7",
                    status: "Registrant"
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            expect(response.status).toBe(401);

        });

        test("Update Student", async () => {
            const token = await signin.getTokenAdmin();
            const response = await fetch(`${url}/api/student/${idNewStudent}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    name: "Bobba",
                    classId: 1,
                    phone: "088827364510",
                    address: "Jl. Cikapayung Indah no 7",
                    status: "Registrant"
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const responseJSON = await response.json();
            expect(response.status).toBe(200);
            expect(responseJSON.data).not.toBeNull();
            expect(responseJSON.data.name).toBe("Bobba");
        });
    });

    describe("DELETE /api/student/:id", () => {
        test("Unauthorized Delete Student", async () => {
            const response = await fetch(`${url}/api/student/${idNewStudent}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            expect(response.status).toBe(401);
        });

        test("Delete Student", async () => {
            const token = await signin.getTokenAdmin();
            const response = await fetch(`${url}/api/student/${idNewStudent}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            const responseJSON = await response.json();
            expect(response.status).toBe(200);
            expect(responseJSON.data).toEqual({
                id: idNewStudent,
                name: "Bobba",
                classId: 1,
                phone: "088827364510",
                address: "Jl. Cikapayung Indah no 7",
                status: "Registrant"
            });

        });
    });
})
