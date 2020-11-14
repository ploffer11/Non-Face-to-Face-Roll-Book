const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "ploffer11",
  password: "4284qneo!",
  database: "backend",
});

db.connect();

module.exports = db;
