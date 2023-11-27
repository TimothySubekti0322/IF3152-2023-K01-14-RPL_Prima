import request from 'supertest'
import route from './route.js'


describe("POST /route", () => {

    describe ("given correct username and password", () => {
        test("should respond with a 200 status code", async() => {
            const response = await request(app).POST("/route").send({
                username: "owner@gmail.com",
                password: "owner"
            })
            expect(response.statusCode.toBe(200))
        })
        
        test("should return message success", async() => {
            const response = await request(app).POST("/route").send({
                username: "owner@gmail.com",
                password: "owner"
            })
            expect(response.statusCode.toBe("Login successful"))
        })
        
    })

    describe ("unregistered username", () => {
        test("should respond with a 404 status code", async() => {
            const response = await request(app).POST("/route").send({
                username: "",
                password: ""
            })
            expect(response.statusCode.toBe(404))
        })
    })

    describe ("wrong password", () => {
        test("should respond with a 401 status code", async() => {
            const response = await request(app).POST("/route").send({
                username: "oowner@gmail.com",
                password: ""
            })
            expect(response.statusCode.toBe(401))
        })
    })
})

// const sum = require('./sum');

// test('adds 1 + 2 to equal 3', () => {
//   expect(sum(1, 2)).toBe(3);
// });