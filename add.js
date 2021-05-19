const inquirer = require('inquirer')
const mysql = require('mysql')
const server = require('./server')
const view = require('./view')
const table = require('console.table')

exports.addEmployee = () => {
	view.getAllRoles(function(rolesResults) {
		const roles = []
		for(let i = 0; i < rolesResults.length; i++) {
			roles.push(rolesResults[i].title)
		}
		const questions = [
			{
				type: 'input',
				message: 'Please enter first name',
				name: 'firstName',
			},
			{
				type: 'input',
				message: 'Please enter last name',
				name: 'lastName',
			},
			{
				type: 'list',
				message: 'Please enter company role',
				name: 'role',
				choices: roles
			}
		]
		inquirer.prompt(questions)
        .then((answers) => {
            const roleId = null
            for(let i = 0; i < rolesResults.length; i++) {
                if(rolesResults[i].title === answers.role) {
                    roleId = rolesResults[i].role_id
                }
            }
            connection.query('INSERT INTO employees SET ?',
                {
                    first_name: answers.firstName,
                    last_name: answers.lastName,
                    emp_role_id: roleId
                },
            function(err,results) {
                if(err) throw err
                console.log('Successfully added ' + answers.firstName + ' ' + answers.lastName )
                server.start()
            })
        })
    })
}