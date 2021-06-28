const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./src/generateHTML');

const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

const managerQs = () => {
    return inquirer.prompt([
        // Manger section
        // Name section
        {
            type: 'input',
            name: 'name',
            message: 'Please enter the name of the team manager.'
        },
        // ID section
        {
            type: 'input',
            name: 'id',
            message: 'What is their ID number?'
        },
        // Email section
        {
            type: 'input',
            name: 'email',
            message: 'What is their email address?'
        },
        // Office Number section
        {
            type: 'input',
            name: 'officeNumber',
            message: 'What is their office number?'
        }
    ])

    // add answers to teamArray
    .then(managerAns => {
        const {name, id, email, officeNumber} = managerAns;
        const teamManager = new Manager (name, id, email, officeNumber);

        // push teamManager to teamArray
        teamArray.push(teamManager);
    })
};

const employeeQs = () => {
    // inform the user that they are inputting information for a team member
    console.log(`

    Please enter the information for a new team member.
    `);
    return inquirer.prompt([
        // Employee section
        // Role selection
        {
            type: 'list',
            name: 'role',
            message: 'What is the role of this team member?',
            choices: ['Engineer', 'Intern']
        },
        // Name section
        {
            type: 'input',
            name: 'name',
            message: 'What is the name of this employee?'
        },
        // ID section, 
        {
            type: 'input',
            name: 'id',
            message: 'What is their ID number?'
        },
        // Email section
        {
            type: 'input',
            name: 'email',
            message: 'What is their email address?'
        },

        // Corresponding role questions
        // GitHub section, if "engineer" role is selected
        {
            type: 'input',
            name: 'github',
            message: 'What is their GitHub username?',
            when: (ans) => ans.role === "Engineer"
        },
        // School section, if "intern" role is selected
        {
            type: 'input',
            name: 'school',
            message: 'What school does this team member attend?',
            when: (ans) => ans.role === "Intern"
        },

        // Continue/Finish section
        {
            type: 'list',
            name: 'continueFinish',
            message: 'What would you like to do now?',
            choices: ['Add another employee', 'Generate file']
        }
    ])

    // add answers to teamArray
    .then(employeeAns => {
        let {name, role, id, email, github, school, continueFinish} = employeeAns;
        let teamMember;

        // if user selected engineer role
        if (role === "Engineer") {
            teamMember = new Engineer (name, id, email, github)
        } 
        // if user selected intern role
        else {
            teamMember = new Intern (name, id, email, school)
        }

        // push answers into teamArray
        teamArray.push(teamMember);

        // if the user wishes to add another employee, restart employeeQs function
        if (continueFinish === "Add another employee") {
            return employeeQs(teamArray);
        } 
        // if the user is finished
        else {
            return teamArray;
        }
    })
};

// write html file into ./dist folder
const writeToFile = (data) => {
    fs.writeFile(`./dist/index.html`, data, err => {
        if (err) {
            throw err;
        };
        console.log('Your index.html file has been generated in the dist/ folder.')
    });
};

// begin questions
const init = () => {
    managerQs()
    .then(employeeQs)
    .then(teamArray => {
        return generateHTML(teamArray);
    })
    .then(pageHTML => {
        return writeToFile(pageHTML);
    })
};

// call to start app
init();