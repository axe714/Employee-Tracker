const db = require("../../config/connection");

const viewManagers = (callback) => {
  db.query(`SELECT * FROM managers`, (err, results) => {
    if (err) throw err;
    setTimeout(callback, 2000)
    return console.table(results);
  });
  
};

module.exports = viewManagers;
