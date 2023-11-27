const fetch = require("node-fetch");

describe("Class", () => {
    it("Retrieve Class", async () => {
        const response = await fetch("http://localhost:3000/api/class");
        const responseJson = await response.json();
        expect(response.status).toBe(200);
    });
});

describe("Signin", () => {
    it("Signin", async () => {
        const response = await fetch("http://localhost:3000/api/auth", {
            method: "POST",
            body: JSON.stringify({
                email: "owner@gmail.com",
                password: "owner",
            })
        });
        const responseJson = await response.json();
        expect(response.status).toBe(200);
        expect(responseJson).toHaveProperty("token");
    });
})
