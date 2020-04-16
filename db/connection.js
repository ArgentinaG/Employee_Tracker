// This file will allow for direct connection with your sql database 
// Require util - middleware 
const util = require("util");
// Require mysql - 
const mysql = require("mysql");
// Create a connection const that equals to the mysql createConnection method
const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "dolphinBench1",
  database: "Employee"
})


// Call the class and utilize the connect method 
connection.connect()
// Setup a query promise (promisify)
connecction.query = util.promisify(connecction.query)

// Export the connection
modules.exports = connection


