import EmployeeDao from '../daos/employee.dao';
import { Employee } from '../model/employee.interface';

class EmployeeService{
    async create(resource: Employee) {
        return EmployeeDao.addEmployee(resource);
    }

    // async deleteById(id: string)
    //     return EmployeeDao.removeUserById(id);
    // }

    async list(limit: number, page: number) {
        return EmployeeDao.listEmployee();
    }

    // async patchById(id: string, resource: PatchUserDto) {
    //     return EmployeeDao.patchUserById(id, resource);
    // }

    // async readById(id: string) {
    //     return EmployeeDao.getUserById(id);
    // }

    // async putById(id: string, resource: PutUserDto) {
    //     return EmployeeDao.putUserById(id, resource);
    // }

    // async getUserByEmail(email: string) {
    //     return EmployeeDao.getUserByEmail(email);
    // }
}

export default new EmployeeService();