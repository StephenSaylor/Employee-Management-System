const inquirer = require('inquirer')
const mysql = require('mysql')

const connection = mysql.createConnection({
	host: 'localhost',

	port: 3306,

	user: 'root',

	password: 'FunkyMonkey68',
	database: 'greatBayDB',
})

function start() {
	inquirer.prompt(
		{
			type: 'list',
			message: 'What would you like to do?',
			name: 'firstPrompt',
			choices: []

	})
}