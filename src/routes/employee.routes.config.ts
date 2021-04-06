import {CommonRoutesConfig} from './common.routes.config';
import express = require("express");
import EmployeeController from '../controllers/employee.controller';
import EmployeeMiddleware from '../utils/employee.middleware'

export class EmployeeRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {

        this.app
            .route(`/employee/all`)
            .get(EmployeeController.listEmployees)
        
        this.app
            .route(`/employee`)
            .post(
                EmployeeMiddleware.validateRequiredEmployeeBodyFields,
                EmployeeMiddleware.validateSameEidDoesntExist,
                EmployeeController.createEmployee
            );

        // this.app.param(`userId`, EmployeeMiddleware.extractUserId);
        this.app
            .route(`/employee/:employeeId`)
            .all(EmployeeMiddleware.validateEmployeeExists)
            .get(EmployeeController.getEmployeeById)
            .delete(EmployeeController.delete);

        // this.app.put(`/users/:userId`, [
        //     UsersMiddleware.validateRequiredUserBodyFields,
        //     UsersMiddleware.validateSameEmailBelongToSameUser,
        //     EmployeeController.put,
        // ]);

        // this.app.patch(`/users/:userId`, [
        //     UsersMiddleware.validatePatchEmail,
        //     EmployeeController.patch,
        // ]);

        return this.app;
    }

}