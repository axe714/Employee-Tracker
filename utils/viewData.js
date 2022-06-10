var starterQuestion = require("../index.js");
const mysql = require("mysql2");
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root",
    database: "company_db",
  },
  console.log(`You've connected to the company_db database`)
);

const viewDepartments = async () => {
    const [availableDepartments] = await db
      .promise()
      .query(`SELECT * FROM departments`);
    console.table(availableDepartments);
    starterQuestion();
  };
  
  const viewRoles = async () => {
    const [availableRoles] = await db.promise().query(`SELECT * FROM roles`);
    console.table(availableRoles);
    starterQuestion();
  };
  
  const viewManagers = async () => {
    const [availableManagers] = await db
      .promise()
      .query(`SELECT * FROM employees`);
    console.table(availableManagers);
    starterQuestion();
  };
  
  const viewEmployees = async () => {
    const [availableEmployees] = await db
      .promise()
      .query(`SELECT * FROM employees`);
    console.table(availableEmployees);
    starterQuestion();
  };

module.exports = viewDepartments;
module.exports = viewRoles;
module.exports = viewManagers;
module.exports = viewEmployees;
