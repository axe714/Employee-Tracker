const db = require("../../config/connection");


const viewDepartments = (callback) => {
  db.query(`SELECT * FROM departments`, (err, results) => {
    if (err) throw err;
    setTimeout(callback, 2000);
    return console.table(results);
  });
};

// const departments = () => {
//   const departmentsArray = db.promise().query(`SELECT * FROM departments`).then((departments) => {
//     return {
//       name: departments.department_name,
//       id: departments.id,
//     };
//   });
//   console.log(departmentsArray)
// };

module.exports = viewDepartments;
