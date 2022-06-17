const db = require("../../config/connection");

const viewDepartments = async () => {
  const departments = await db.promise().query(`SELECT * FROM departments`);
  return console.table(departments[0]);
};

// ------ OLD FUNCTION --------

// const viewDepartments = (callback) => {
//   db.query(`SELECT * FROM departments`, (err, results) => {
//     if (err) throw err;
//     setTimeout(callback, 2000);
//     return console.table(results);
//   });
// };

module.exports = viewDepartments;
