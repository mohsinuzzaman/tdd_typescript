For Typescript + Express backend:
1. https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-1
2. https://www.toptal.com/express-js/nodejs-typescript-rest-api-pt-2
3. https://tutorialedge.net/typescript/creating-rest-api-express-typescript/
4. https://tutorialedge.net/typescript/testing-typescript-api-with-jest/

For JEST and Supertest testing:
1. https://www.rithmschool.com/courses/intermediate-node-express/api-tests-with-jest
2. https://medium.com/@pojotorshemi/integration-test-on-express-restful-apis-using-jest-and-supertest-4cf5d1414ab0

Typescript Specifics:
1. https://stackoverflow.com/questions/33643107/read-and-write-a-text-file-in-typescript



Below snippet causes issue in test but works fine with postman
fs.readFileSync(this.db, (err,data)=>{
    if (err) {
        throw err;
    }
    console.log("Logging file")
    console.log(this.employeeData)
    this.employeeData = JSON.parse(data.toString());
    // console.log('Created new instance of EmployeeDao');
});