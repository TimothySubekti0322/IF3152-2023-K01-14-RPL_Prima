import { createMocks } from "node-mocks-http";
// import { GET } from "../src/app/api/class/route";

import request from "supertest";
import next from "next";

const app = next({ dev: false });
const handler = app.getRequestHandler();

// describe("Test app.ts", () => {
//   test("Catch-all route", async () => {
//     const res = await request(app).get("/");
//     expect(res.body).toEqual({ message: "Allo! Catch-all route." });
//   });
// });

// describe("Test Next.js API Route", () => {
//   test("Catch-all route", async () => {
//     const { req, res } = createMocks({
//       method: "GET",
//     });

//     const response = await GET();
//     console.log(response);
//     const data = JSON.stringify(response.body) // Parsing JSON data
//     console.log(data);
//     console.log(data);
//     // expect(res.status).toBe(200);
//     // expect(response.body.source).toBeGreaterThan(0);
//   });
// });

describe("Test /api/classes", () => {
  test("GET /api/classes", async () => {
    const res = await request(handler).get("/api/class");
    console.log(res);
    expect(res.status).toBe(200);
    // Add more assertions as needed
  });
});
