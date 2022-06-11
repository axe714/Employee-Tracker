const db = require("../connection");

const viewDepartments = (callback) => {
  return db.query(
    `SELECT * FROM departments`,
    (err, results) => {
      if (err) throw err;
      console.table(results);
      setTimeout(callback, 2000);
    }
  );

};

module.exports = viewDepartments;
