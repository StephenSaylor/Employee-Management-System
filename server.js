const inquirer = require('inquirer')
const mysql = require('mysql')
const table = require('console.table')
const add = require("./add");
const update = require("./update");
const view = require("./view")

const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'FunkyMonkey68',
	database: 'companyDB',
})

connection.connect((err) => {
	if (err) throw err;
	start();
  });

const start = () => {
	inquirer.prompt(
		{
			type: 'list',
			message: 'What would you like to do?',
			name: 'firstPrompt',
			choices: ['View', 'Add', 'Update', 'Exit']
	})
	.then((answer) => {
		switch (answer.firstPrompt) {
			case 'View':
				viewEmployees()
				break
			case 'Add':
				addEmployee()
				break
			case 'Update':
				updateEmployee()
				break
			case 'Exit':
				connection.end()
				break
			default:
         		console.log(`Invalid action: ${answer.firstPrompt}`)
        		break
		}
	}
	)}

start()