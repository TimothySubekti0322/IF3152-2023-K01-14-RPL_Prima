const fetch = require("node-fetch");
const signin = require('./signin');

const url = "http://localhost:3000";

describe("User", () => {

    var idNewUser;

    describe("GET /api/user", () => {
        test("Unauthorized Get User", async () => {
            const response = await fetch(`${url}/api/user`);
            expect(response.status).toBe(401);
        });

        test("Get User", async () => {
            const token = await signin.getToken();
            const response = await fetch(`${url}/api/user`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            expect(response.status).toBe(200);
        });
    });

    describe("POST /api/user", () => {
        test("Unauthorized Add New User", async () => {
            const response = await fetch(`${url}/api/user`, {
                method: 'POST',
                body: JSON.stringify({
                    email: "xyz@gmail.com",
                    password: "admin",
                    phone: "08111122",
                    location: "bandung"
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            expect(response.status).toBe(401);
        });

        test("Add New User", async () => {
            const token = await signin.getToken();
            const response = await fetch(`${url}/api/user`, {
                method: 'POST',
                body: JSON.stringify({
                    email: "xyz@gmail.com",
                    password: "admin",
                    phone: "08111122",
                    location: "bandung"
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const responseJSON = await response.json();
            expect(response.status).toBe(201);
            expect(responseJSON.data).not.toBeNull();
            idNewUser = responseJSON.data.id;
        });
    });

    describe("GET /api/user/:id", () => {
        test("Unauthorized Get User By Id", async () => {
            const response = await fetch(`${url}/api/user/${idNewUser}`, {
                headers: {
                    'Content-Type': 'application/json',
                }
            });
            expect(response.status).toBe(401);
        });

        test("Get User By Id", async () => {
            const token = await signin.getToken();
            const response = await fetch(`${url}/api/user/${idNewUser}`, {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const responseJSON = await response.json();
            expect(response.status).toBe(200);
            expect(responseJSON.data).toEqual({
                id: idNewUser,
                email: "xyz@gmail.com",
                password: "$2a$10$vr73S3v4Z4xMhhFlLnEJ8uAyHJgRl23HgH1HmueUGOfSJcXCVXkwW",
                phone: "08111122",
                location: "bandung",
                role: "Admin"
            });
        });
    });

    describe("PATCH /api/user/:id", () => {
        test("Unauthorized Update User", async () => {
            const response = await fetch(`${url}/api/user/${idNewUser}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    email: "abc@gmail.com",
                    password: "$2a$10$vr73S3v4Z4xMhhFlLnEJ8uAyHJgRl23HgH1HmueUGOfSJcXCVXkwW",
                    phone: "08111111",
                    location: "bandung",
                    role: "Admin"
                }),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            expect(response.status).toBe(401);

        });

        test("Update User", async () => {
            const token = await signin.getToken();
            const response = await fetch(`${url}/api/user/${idNewUser}`, {
                method: 'PATCH',
                body: JSON.stringify({
                    email: "abc@gmail.com",
                    password: "$2a$10$vr73S3v4Z4xMhhFlLnEJ8uAyHJgRl23HgH1HmueUGOfSJcXCVXkwW",
                    phone: "08111111",
                    location: "bandung",
                    role: "Admin"
                }),
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });
            const responseJSON = await response.json();
            expect(response.status).toBe(200);
            expect(responseJSON.data).not.toBeNull();
            expect(responseJSON.data.email).toBe("abc@gmail.com");
        });
    });

    describe("DELETE /api/user/:id", () => {
        test("Unauthorized Delete User", async () => {
            const response = await fetch(`${url}/api/user/${idNewUser}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            expect(response.status).toBe(401);
        });

        test("Delete User", async () => {
            const token = await signin.getToken();
            const response = await fetch(`${url}/api/user/${idNewUser}`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`
                }
            });

            const responseJSON = await response.json();
            expect(response.status).toBe(200);
            expect(responseJSON.data).toEqual({
                id: idNewUser,
                email: "abc@gmail.com",
                password: "$2a$10$vr73S3v4Z4xMhhFlLnEJ8uAyHJgRl23HgH1HmueUGOfSJcXCVXkwW",
                phone: "08111111",
                location: "bandung",
                role: "Admin"
            });

        });
    });
})