import express = require("express");
import {CommonRoutesConfig} from './routes/common.routes.config';
import {UsersRoutes} from './routes/users.routes.config';
import {EmployeeRoutes} from './routes/employee.routes.config';
const routes: Array<CommonRoutesConfig> = [];

// Our Express APP config
const app = express();
app.set("port", process.env.PORT || 3000);
routes.push(new UsersRoutes(app));
routes.push(new EmployeeRoutes(app));
// API Endpoints
app.get("/", (req, res) => {
  res.send("Hi");
});

// export our app
export default app;