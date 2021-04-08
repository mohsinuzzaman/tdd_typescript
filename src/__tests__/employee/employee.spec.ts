import app from "../../app";
import * as request from "supertest";
import * as _ from "lodash";
import { Employee } from "../../model/employee.interface";

describe("POST /employee", () => {
  it("a api endpoint to create a employee", async () => {
    const obj = {
      eid: 999999,
      name: "test999999",
      age: 999999,
    };
    const result = await request(app).post("/employee").send(obj);
    console.log(result.text);
    expect(
      _.isEqual(JSON.parse(result.text), { eid: 999999 }) ||
        _.isEqual(JSON.parse(result.text), {
          message: "Employee with given eid 999999 already exists",
        })
    ).toBeTruthy();
    expect(result.status).toEqual(201);
  });
});

describe("GET", () => {
  it("api endpoint for listing all the employees", async () => {
    const result = await request(app).get("/employee/all");
    const res = JSON.parse(result.text).filter((o: Employee) =>
      _.isEqual(o, { name: "test1", age: 20, eid: 1 })
    );
    expect(res.length).toEqual(1);
    expect(result.status).toEqual(200);
  });

  it("api endpoint for retrieving the employee by id", async () => {
    const result = await request(app).get("/employee/999999");
    expect(
      _.isEqual(JSON.parse(result.text), {
        eid: 999999,
        name: "test999999",
        age: 999999,
      }) ||
        _.isEqual(JSON.parse(result.text), {
          message: "Employee with given eid 999999 doesn't exists",
        })
    ).toBeTruthy();
    expect(result.status).toEqual(200);
  });
});

describe("PUT", () => {
  it("api endpoint for updating a employee", async () => {
    const obj = {
      eid: 999999,
      name: "test999999-UPDATE",
      age: 999999,
    };
    const result = await request(app).put("/employee/999999").send(obj);
    expect(result.text).toEqual("");
    expect(result.status == 204 || result.status == 400).toBeTruthy();
  });

  it("checking updated employee", async () => {
    const result = await request(app).get("/employee/999999");
    console.log(result.text);
    expect(
      _.isEqual(JSON.parse(result.text), {
        eid: 999999,
        name: "test999999-UPDATE",
        age: 999999,
      }) ||
        _.isEqual(JSON.parse(result.text), {
          message: "Employee with given eid 999999 doesn't exists",
        })
    ).toBeTruthy();
    expect(result.status).toEqual(200);
  });
});

describe("DELETE /employee", () => {
  it("a api endpoint to delete a employee", async () => {
    const obj = {
      eid: 999999,
      name: "test999999",
      age: 999999,
    };
    const result = await request(app).delete("/employee/999999").send(obj);
    console.log(result.text);
    expect(result.text).toEqual("");
    expect(result.status).toEqual(204);
  });
});
