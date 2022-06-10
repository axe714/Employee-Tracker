const inquirer = require("inquirer");
const mysql = require("mysql2");
const viewDepartments = require("./utils/viewData")
const viewRoles = require("./utils/viewData")
const viewManagers = require("./utils/viewData")
const viewEmployees = require("./utils/viewData")

const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "root",
    database: "company_db",
  },
  console.log(`You've connected to the company_db database`)
);

const starterQuestion = async () => {
  inquirer
    .prompt([
      {
        type: "list",
        name: "starterQuestion",
        message: "What would you like to do?",
        choices: [
          "View All Departments",
          "View All Roles",
          "View All Managers",
          "View All Employees",
          "Add Department",
          "Add Role",
          "Add Manager",
          "Add Employee",
          "Update Employee Role",
          "Exit",
        ],
      },
    ])
    .then((response) => {
      switch (response.starterQuestion) {
        case "View All Departments":
          viewDepartments();
          break;

        case "View All Roles":
          viewRoles();
          break;

        case "View All Managers":
          viewManagers();
          break;

        case "View All Employees":
          viewEmployees();
          break;

        case "Add Department":
          addDepartment();
          break;

        case "Add Role":
          addRole();
          break;

        case "Add Manager":
          addManager();
          break;

        case "Add Employee":
          addEmployee();
          break;

        case "Update Employee Role":
          updateEmployee();
          break;

        case "Exit":
          console.log(`Goodbye!`);
          process.exit(1);
      }
    });
};

// const viewDepartments = async () => {
//   const [availableDepartments] = await db
//     .promise()
//     .query(`SELECT * FROM departments`);
//   console.table(availableDepartments);
//   starterQuestion();
// };

// const viewRoles = async () => {
//   const [availableRoles] = await db.promise().query(`SELECT * FROM roles`);
//   console.table(availableRoles);
//   starterQuestion();
// };

// const viewManagers = async () => {
//   const [availableManagers] = await db
//     .promise()
//     .query(`SELECT * FROM employees`);
//   console.table(availableManagers);
//   starterQuestion();
// };

// const viewEmployees = async () => {
//   const [availableEmployees] = await db
//     .promise()
//     .query(`SELECT * FROM employees`);
//   console.table(availableEmployees);
//   starterQuestion();
// };

const addDepartment = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "addDepartment",
        message: "What is the name of the department you would like to add?",
      },
    ])
    .then((response) => {
      //check if item already exists in database
      db.query(
        `INSERT INTO departments (department_name) VALUES ("${response.addDepartment}");`,
        (err, results) => {
          if (err) throw err;
          viewDepartments();
          starterQuestion();
        }
      );
    });
};

const addRole = () => {
  //TO DO: add roles into role table
  inquirer
    .prompt([
      {
        type: "input",
        name: "addRole",
        message: "What is the name of the role you would like to add?",
      },
      {
        type: "input",
        name: "roleSalary",
        message: "What is the salary of the role you would like to add?",
      },
      {
        type: "list",
        name: "roleDepartment",
        message: "What department does this role belong to?",
        //TO DO: grab all departments from database and add to choices
        // choices: departments().map(d => [{id: d.id, name: d.department_name}]),
        choices: ["Placeholder 1", "Placeholder 2", "Placeholder 3"],
      },
    ])
    .then((response) => {
      //TO DO: add role into the role table
      console.log(
        `You added ${response.addRole} with the salary of ${response.roleSalary} to the roles table`
      );
      starterQuestion();
    });
};

const addManager = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "managerFirstName",
        message: "What is your manager's first name?",
      },
      {
        type: "input",
        name: "managerLastName",
        message: "What is your manager's last name?",
      },
      {
        type: "list",
        name: "managerDepartment",
        message: "What department does your manager preside over?",
        choices: ["Placeholder 1", "Placeholder 2", "Placeholder 3"],
      },
      {
        type: "input",
        name: "managerSalary",
        message: "What is your manager's salary?",
      },
    ])
    .then((response) => {
      console.log(
        `You created the manager ${response.managerFirstName} ${response.managerLastName} that manages the ${response.managerDepartment} department. Their salary is ${response.managerSalary}.`
      );
      starterQuestion();
    });
};

const addEmployee = () => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the employee's first name?",
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the employee's last name?",
      },
      {
        type: "list",
        name: "employeeRole",
        message: "What is the employee's role?",
        //TO DO: add a function to get all roles via unique id in database
        choices: ["Placeholder1", "Placeholder2", "Placeholder3"],
      },
    ])
    .then((response) => {
      //TO DO: add employee to the employee table
      console.log(
        `You added ${response.firstName} ${response.lastName} as a ${response.employeeRole} to the employee table`
      );
      starterQuestion();
    });
};

const updateEmployee = () => {
  console.log(`You still need to add an updateEmployee function dummy`);
  starterQuestion();
};

const departments = () => {
  const departmentsArray = [];
  db.query(`SELECT * FROM departments`, (err, results) => {
    if (err) throw err;
    console.log(results);
    return results;
  });
};

const roles = () => {
  const rolesArray = [];
  db.query(`SELECT * FROM roles`, (err, results) => {
    if (err) throw err;
    console.log(results);
    return results;
  });
};

const managers = () => {
  const managersArray = [];
  db.query(`SELECT * FROM managers`, (err, results) => {
    if (err) throw err;
    console.log(results);
    return results;
  });
};

const employees = () => {
  const employeesArray = [];
  db.query(`SELECT * FROM employees`, (err, results) => {
    if (err) throw err;
    console.log(results);
    return results;
  });
};

const init = () => {
  starterQuestion();
};

init();

module.exports = starterQuestion;
