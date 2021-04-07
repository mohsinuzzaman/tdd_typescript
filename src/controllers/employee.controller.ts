import express = require("express");
import  EmployeeService  from '../services/employee.service';
import { Employee } from '../model/employee.interface'
import employeeService from "../services/employee.service";

class EmployeeController {
    async listEmployees(req: express.Request, res: express.Response) {
        const emps : Employee[] = await EmployeeService.list(100, 0);
        res.status(200).send(emps);
    }

    async getEmployeeById(req: express.Request, res: express.Response) {
        const user = await employeeService.readById(parseInt(req.params.employeeId));
        res.status(200).send(user);
    }

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

    async put(req: express.Request, res: express.Response) {
        let result = await employeeService.putById(parseInt(req.params.employeeId), req.body);
        if(result === ""){
            res.status(204).send();
        }else{
            res.status(400).send();
        }
        
    }

    async delete(req: express.Request, res: express.Response) {
        await employeeService.deleteById(parseInt(req.params.employeeId));
        res.status(204).send("");
    }
}

export default new EmployeeController();