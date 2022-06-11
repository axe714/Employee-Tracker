const db = require("../connection");

const viewManagers = (callback) => {
  db.query(`SELECT * FROM managers`, (err, results) => {
    if (err) throw err;
    console.table(results);
    setTimeout(callback, 2000)
  });
};

module.exports = viewManagers;
