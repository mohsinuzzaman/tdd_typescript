import { Employee } from "../model/employee.interface";
import * as fs from "fs";

class EmployeeDao {
  employeeData: Array<Employee>;
  db = `/Users/mohsin/Documents/site/tdd_typescript/database/employees.json`;

  constructor() {
    const foo = fs
      .readFileSync(
        "/Users/mohsin/Documents/site/tdd_typescript/database/employees.json"
      )
      .toString();
    this.employeeData = JSON.parse(foo);
  }

  async addEmployee(employee: Employee) {
    this.employeeData.push(employee);
    await fs.writeFile(
      this.db,
      JSON.stringify(this.employeeData),
      function (err) {
        if (err) {
          return console.error(err);
        }
      }
    );
    return employee.eid;
  }

  async listEmployee() {
    return await this.employeeData;
  }

  async getEmployeeById(id: number) {
    return this.employeeData.find((emp) => emp.eid == id);
  }

  async removeEmployeeById(id: number) {
    const index: number = this.employeeData.findIndex((emp) => emp.eid == id);
    this.employeeData.splice(index);
    await fs.writeFile(
      this.db,
      JSON.stringify(this.employeeData),
      function (err) {
        if (err) {
          return console.error(err);
        }
      }
    );
    return Promise.resolve(undefined);
  }

  async updateEmployeeById(id: number, resource: Employee) {
    const emp: Employee = this.employeeData.find((emp) => emp.eid == id);
    const index: number = this.employeeData.findIndex((emp) => emp.eid == id);
    if (emp) {
      this.employeeData.splice(index);
      this.employeeData.push(resource);
      await fs.writeFile(
        this.db,
        JSON.stringify(this.employeeData),
        function (err) {
          if (err) {
            return console.error(err);
          }
        }
      );
      return "";
    } else {
      return { message: `Employee with given eid ${id} doesn't exists` };
    }
  }
}

export default new EmployeeDao();
