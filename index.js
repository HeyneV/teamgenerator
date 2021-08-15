const Inquirer = require('inquirer');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Employee = require('./lib/Employee');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const card = require('./src/card');
const htmlBody = require("./src/htmlBody");
const fs = require("fs")
const employeeDB = []


function askManager() {

    inquirer.prompt([{
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is your id?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your office number?',
        name: 'officeNumber'
    },
    ])
        .then(managerData => {
            const manager = new Manager(managerData.name, managerData.id, managerData.email, managerData.officeNumber)
            employeeDB.push(manager)
            menu()
        })

}

function menu() {

    inquirer.prompt({
        type: 'list',
        message: 'What type of employee?',
        choices: ['Engineer', 'Intern', "generate team"],
        name: 'selection'
    })
        .then(response => {
            if (response.selection === 'Engineer') {
                addEngineer()
            }
            else if (response.selection === 'Intern') {
                addIntern()
            }
            else {
                addTeam()
            }
        })


}
function addTeam() {
    console.log(employeeDB)

    let team = ""
    employeeDB.forEach(employee => {
        team = team + card(employee)
    })

    fs.writeFileSync("./dist/index.html", htmlBody(team))
}


function addEngineer() {
    inquirer.prompt([{
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is your id?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your Github username?',
        name: 'github'
    },


    ])
        .then(engineerData => {
            const engineer = new Engineer(engineerData.name, engineerData.id, engineerData.email, engineerData.github)
            employeeDB.push(engineer)
            menu()
        })

}
function addIntern() {
    inquirer.prompt([{
        type: 'input',
        message: 'What is your name?',
        name: 'name'
    },
    {
        type: 'input',
        message: 'What is your id?',
        name: 'id'
    },
    {
        type: 'input',
        message: 'What is your email address?',
        name: 'email'
    },
    {
        type: 'input',
        message: 'What is your school?',
        name: 'school'
    },


    ])
        .then(internData => {
            const intern = new Intern(internData.name, internData.id, internData.email, internData.school)
            employeeDB.push(intern)
            menu()
        })

}


askManager()