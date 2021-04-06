import express = require("express");
import  EmployeeService  from '../services/employee.service'

class EmployeeMiddleware {
    async validateRequiredEmployeeBodyFields(req: express.Request, res: express.Response, next: express.NextFunction) {
        if (req.body && req.body.eid && req.body.name && req.body.age) {
            next();
        } else {
            res.status(400).send({
                error: `Missing required fields eid or name or age`,
            });
        }
    }

    async validateSameEidDoesntExist(req: express.Request, res: express.Response, next: express.NextFunction) {
        const user = await EmployeeService.readById(req.body.eid);
        if (user) {
            res.status(201).send({ message: `Employee with given eid ${req.body.eid} already exists` });
        } else {
            next();
        }
    }

    async validateEmployeeExists(req: express.Request, res: express.Response, next: express.NextFunction) {
        const emp = await EmployeeService.readById(parseInt(req.params.employeeId));
        if (emp) {
            next();
        } else {
            res.status(201).send({ message: `Employee with given eid ${req.params.employeeId} doesn't exists` });
        }
    }

}

export default new EmployeeMiddleware();