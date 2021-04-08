import EmployeeDao from "../daos/employee.dao";
import { Employee } from "../model/employee.interface";

class EmployeeService {
  async create(resource: Employee) {
    return await EmployeeDao.addEmployee(resource);
  }

  async deleteById(id: number) {
    return EmployeeDao.removeEmployeeById(id);
  }

  async list() {
    return await EmployeeDao.listEmployee();
  }

  // async patchById(id: string, resource: PatchUserDto) {
  //     return EmployeeDao.patchUserById(id, resource);
  // }

  async readById(id: number) {
    return EmployeeDao.getEmployeeById(id);
  }

  async putById(id: number, resource: Employee) {
    return EmployeeDao.updateEmployeeById(id, resource);
  }

  // async getUserByEmail(email: string) {
  //     return EmployeeDao.getUserByEmail(email);
  // }
}

export default new EmployeeService();
