import { Employee } from "../../model/employee.interface";
import EmployeeDao from "../../daos/employee.dao";
import * as _ from "lodash";

jest.mock("fs");

describe("Employee DAO Unit tests", () => {
  it("Testing List Employee Method", async () => {
    const list: Employee[] = await EmployeeDao.listEmployee();
    const res = list.filter((o: Employee) =>
      _.isEqual(o, { name: "test1", age: 20, eid: 1 })
    );
    expect(res.length).toEqual(1);
  });

  it("Testing Add Employee Method", async () => {
    const obj = {
      eid: 999998,
      name: "test999998",
      age: 999998,
    };
    const res = await EmployeeDao.addEmployee(obj);
    expect(res).toEqual(obj.eid);
  });

  it("Testing getEmployeeById Method", async () => {
    const obj = {
      eid: 999999,
      name: "test999999",
      age: 999999,
    };
    const res = await EmployeeDao.getEmployeeById(999999);
    expect(res).toEqual(obj);
  });

  it("Testing Add Employee Method", async () => {
    const obj = {
      eid: 999999,
      name: "test999997",
      age: 999997,
    };
    await EmployeeDao.updateEmployeeById(obj.eid, obj);
    const res = await EmployeeDao.getEmployeeById(999999);
    expect(res).toEqual(obj);
  });

  it("Testing removeEmployeeById Method", async () => {
    // const mock = jest.spyOn(fs, <never>"readFileSync");
    await EmployeeDao.removeEmployeeById(999999);
    const res = await EmployeeDao.getEmployeeById(999999);
    expect(res).toEqual(undefined);
  });
});
