import app from "../../app";
import * as request from "supertest";

describe("GET /employee/all - a simple api endpoint", () => {
  it("Hello API Request", async () => {
    const result = await request(app).get("/employees");
    expect(JSON.parse(result.text)).toEqual([{name:"test1", age:20, eid:1}]);
    expect(result.status).toEqual(200);
  });
});