const db = require("../../config/connection");

const viewRoles = (callback) => {
  return db.query(`SELECT * FROM roles`, (err, results) => {
    if (err) throw err;
    setTimeout(callback, 2000)
    return console.table(results);
  });
};

module.exports = viewRoles;
