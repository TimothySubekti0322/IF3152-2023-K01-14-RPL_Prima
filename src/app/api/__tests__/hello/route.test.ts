import request from "supertest";
import handler from "./route";

test("GET /api/data returns expected data", async () => {
  const response = await request(handler).get("/");
  expect(response.status).toBe(200);
  expect(response.body).toEqual({ message: "Hello, world!" });
}, 10000000);
