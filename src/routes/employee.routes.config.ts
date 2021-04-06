import {CommonRoutesConfig} from './common.routes.config';
import express = require("express");
import EmployeeController from '../controllers/employee.controller';

export class EmployeeRoutes extends CommonRoutesConfig {
    constructor(app: express.Application) {
        super(app, 'UsersRoutes');
    }

    configureRoutes(): express.Application {
        this.app
            .route(`/employees`)
            .get(EmployeeController.listUsers)
            // .post(
            //     UsersMiddleware.validateRequiredUserBodyFields,
            //     UsersMiddleware.validateSameEmailDoesntExist,
            //     EmployeeController.createUser
            // );

        // this.app.param(`userId`, UsersMiddleware.extractUserId);
        // this.app
        //     .route(`/users/:userId`)
        //     .all(UsersMiddleware.validateUserExists)
        //     .get(EmployeeController.getUserById)
        //     .delete(EmployeeController.removeUser);

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