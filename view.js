const mysql = require('mysql')
const server = require("../server")
const table = require('console.table')

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "FunkyMonkey68",
    database: "companyDB"
  });

exports.viewAllEmployees = () => {
	const queryString = "SELECT e.emp_id, e.first_name, e.last_name, title, salary, dept_name, " +
	   "e2.first_name AS manager_first_name, e2.last_name AS manager_last_name " +
	   "FROM employees AS E " +
	   "INNER JOIN role AS C ON E.emp_role_id = c.role_id " +
	   "INNER JOIN department AS D ON C.dept_id = d.dept_id " +
	   "LEFT JOIN employees AS E2 ON E.manager_id = E2.emp_id"
	
	connection.query(queryString, function(err, res) {
	   if(err) {throw err}
	   
	   console.table(res)
		
	 server.start()
	})
 }
 
 exports.getAllDepartments = () => {
	connection.query("SELECT * FROM department", function(err, response) {
	  if(err) throw err
	  response
   })
}

 exports.getAllRoles = () => {
  connection.query("SELECT * FROM roles", function(err, response) {
	   if(err) throw err
	   response
	})
 }
 
 exports.getAllEmployees = () => {
	connection.query("SELECT * FROM employees", function(err, response) {
	  if(err) throw err
	  response
   })
 }