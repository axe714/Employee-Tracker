const db = require("../../config/connection");


const viewDepartments = async () => {
  const departments = await db.promise().query(`SELECT * FROM departments`)
    return departments
  }

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
