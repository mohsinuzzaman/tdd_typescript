import { Employee } from '../model/employee.interface';
import * as fs from 'fs';

class EmployeeDao {
    employeeData: Array<Employee>;
    db: string = `/Users/mohsin/Documents/site/tdd_typescript/database/employees.json`

    constructor() {
        var foo = fs.readFileSync('/Users/mohsin/Documents/site/tdd_typescript/database/employees.json').toString();
        this.employeeData = JSON.parse(foo);
    }

    async addEmployee(employee: Employee) {
        this.employeeData.push(employee);
        await fs.writeFile(this.db, JSON.stringify(this.employeeData),  function(err) {
            if (err) {
                return console.error(err);
            }
        });
        return employee.eid;
    }

    async listEmployee() {
        return await this.employeeData;
    }

    async getEmployeeById(id: Number){
        return this.employeeData.find(emp => emp.eid == id);
    }
}

export default new EmployeeDao();
