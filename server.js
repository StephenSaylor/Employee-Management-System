const inquirer = require('inquirer')
const mysql = require('mysql')
const table = require('console.table')


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

const viewEmployees = () => {

}
	


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
	inquirer.prompt(questions)
		.then((answers) => {
			var roleId = null;
            for(var i= 0; i < rolesResults.length; i++) {
                if(rolesResults[i].title === answers.role) {
                    roleId = rolesResults[i].role_id
                }
            }
			connection.query("INSERT INTO employees SET ?",
                {
                    first_name: answers.firstName,
                    last_name: answers.lastName,
                    emp_role_id: roleId
                },
			function(err, results) {
                if(err) throw err;
                console.log("Added " + answers.firstName + " " + answers.lastName )
			})
}	
	


start()