import { Employee } from '../model/employee.interface';
// import * as data from '../../database/employee.json';
import * as fs from 'fs';

class EmployeeDao {
    employeeData: Array<Employee>;

    constructor() {
        var foo = fs.readFileSync('/Users/mohsin/Documents/site/tdd_typescript/database/employees.json').toString();
        console.log(foo);
        this.employeeData = JSON.parse(foo);
        console.log('Created new instance of UsersDao');
    }

    async addEmployee(employee: Employee) {
        this.employeeData.push(employee);
        return employee.eid;
    }

    async listEmployee() {
        return this.employeeData;
    }
}

export default new EmployeeDao();
