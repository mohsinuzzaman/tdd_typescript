import express = require("express");
import  EmployeeService  from '../services/employee.service';
import { Employee } from '../model/employee.interface'
import employeeService from "../services/employee.service";

class EmployeeController {
    async listEmployees(req: express.Request, res: express.Response) {
        const emps : Employee[] = await EmployeeService.list(100, 0);
        res.status(200).send(emps);
    }

    // async getUserById(req: express.Request, res: express.Response) {
    //     const user = await usersService.readById(req.body.id);
    //     res.status(200).send(user);
    // }

    async createEmployee(req: express.Request, res: express.Response) {
        var emp: Employee = req.body
        const eid = await employeeService.create(emp);
        res.status(201).send({ eid: eid });
    }

    // async patch(req: express.Request, res: express.Response) {
    //     if (req.body.password) {
    //         req.body.password = await argon2.hash(req.body.password);
    //     }
    //     log(await usersService.patchById(req.body.id, req.body));
    //     res.status(204).send();
    // }

    // async put(req: express.Request, res: express.Response) {
    //     req.body.password = await argon2.hash(req.body.password);
    //     log(await usersService.putById(req.body.id, req.body));
    //     res.status(204).send();
    // }

    // async removeUser(req: express.Request, res: express.Response) {
    //     log(await usersService.deleteById(req.body.id));
    //     res.status(204).send();
    // }
}

export default new EmployeeController();