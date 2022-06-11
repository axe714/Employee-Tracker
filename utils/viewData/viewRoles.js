const db = require("../../config/connection");

const viewRoles = (callback) => {
  return db.query(`SELECT * FROM roles`, (err, results) => {
    if (err) throw err;
    console.table(results);
    setTimeout(callback, 2000)
  });
};

module.exports = viewRoles;
