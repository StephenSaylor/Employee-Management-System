const inquirer = require('inquirer')
const mysql = require('mysql')
const server = require('./server')
const view = require('./view')
const table = require('console.table')

const connection = mysql.createConnection({
	host: 'localhost',
	port: 3306,
	user: 'root',
	password: 'FunkyMonkey68',
	database: 'companyDB',
})

exports.updateEmployee = () => {
    view.getAllEmployees(function (employeeResults) {
        console.log(employeeResults)
        const employees = []
        for (let i = 0; i < employeeResults.length; i++) {
            const fullName = {
                name: employeeResults[i].first_name + ' ' + employeeResults[i].last_name,
                value: {
                    id: employeeResults[i].emp_id,
                    firstname: employeeResults[i].first_name,
                    lastname: employeeResults[i].last_name
                }
            }

            employees.push(fullName)
        }

        inquirer.prompt([
            {
                type: 'list',
                message: 'Which employee would you like to update?',
                name: 'employee',
                choices: employees
            }
        ]).then((answers) => {
            view.getAllRoles(function (rolesResults) {
                const roles = []
                console.log(answers.employee)

                for (let i = 0; i < rolesResults.length; i++) {
                    const fullRole = {
                        name: rolesResults[i].title,
                        value: {
                            id: rolesResults[i].role_id,
                            role: rolesResults[i].title,
                        }
                    }
                    roles.push(fullRole)
                }

                inquirer.prompt([
                    {
                        type: 'list',
                        message: `Which role would you like to update ${answers.employee.firstname} to?`,
                        name: 'role',
                        choices: roles
                    }
                ]).then((results) => {
                    console.log(results.role)
                    connection.query('UPDATE employees SET emp_role_id = ? WHERE emp_id = ?',[results.role.id, answers.employee.id], function (err, results) {
                        if (err) throw err
                        console.log('Updated ' + answers.employee.id)
                        server.start()
                    })
                })
            })
        })
    })
}