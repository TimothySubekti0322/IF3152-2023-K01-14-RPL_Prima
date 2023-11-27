const fetch = require("node-fetch");
const { GET } = require("./route");
describe("Class", () => {
    it("Retrieve Class", async () => {
        const response = await fetch("http://localhost:3000/api/class");
        const responseJson = await response.json();
        expect(response.status).toBe(200);
    });
});