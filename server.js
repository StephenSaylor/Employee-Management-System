const inquirer = require('inquirer')
const mysql = require('mysql')

const connection = mysql.createConnection({
	host: 'localhost',

	port: 3306,

	user: 'root',

	password: 'FunkyMonkey68',
	database: 'companyDB',
})

function start() {
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

const addEmployee = () => {
	const questions = [
		{
			type: "input",
            message: "Please enter first name",
            name: "firstName",
            default: "Adam"
        },
        {
            type: "input",
            message: "Please enter last name",
            name: "lastName",
            default: "Anderson"
        },
        {
            type: "list",
            message: "Please enter company role",
            name: "role",
            choices: 
        }
    ]
}
	


start()