var sqlite3 = require("sqlite3").verbose();

var db = new sqlite3.Database("./database/data.sqlite", (err) => {
  if (err) {
    console.log(err.message);
  }
});

module.exports = db;
