const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');

const questions = () => {
    return inquirer.prompt([
        // Manger Section
        // Name Section
        {
            type: 'input',
            name: 'managerName',
            message: 'What is the title of your application?'
        },
        // Employee ID Section
        {
            type: 'input',
            name: 'managerId',
            message: 'What is your employee ID number?'
        },
        // Email
        {
            type: 'input',
            name: 'managerEmail',
            message: 'What is your email address?'
        },
        // Office Number Section
        {
            type: 'input',
            name: 'manageOffice',
            message: 'What is your office number?'
        }

        
        // Employee Section
        // Role Selection
        {
            type: 'input',
            name: 'employeeRole',
            message: 'What is the role of this team member?'
        },
        // Name Section
        {
            type: 'input',
            name: 'employeeName',
            message: 'What is the title of your application?'
        },
        // Employee ID Section
        {
            type: 'input',
            name: 'employeeId',
            message: 'What is your employee ID number?'
        },
        // Email
        {
            type: 'input',
            name: 'employeeEmail',
            message: 'What is your email address?'
        },

        // Corresponding role questions
        // GitHub Section, if "engineer"
        {
            type: 'input',
            name: 'employeeGitHub',
            message: 'What is your GitHub username?'
        },
        // School section, if "intern"
        {
            type: 'input',
            name: 'employeeSchool',
            message: 'What school does this team member attend?'
        }
    ])

    // send data to generateHTML.js
    .then(data => {
        return generateHTML(data);
    })

    // name the file to index.html
    .then(generatedIndex => {
        return writeToFile('index.html', generatedIndex);
    })
    
    // log error is any occur
    .catch(err => {
        console.log(err);
    })
};

// write html file into ./generated folder
const writeToFile = (fileName, data) => {
    fs.writeFile(`./generated/${fileName}`, data, err => {
        if (err) {
            throw err;
        };
        console.log('Your index.html file has been generated.')
    });
}

// begin questions
const init = () => {
    questions();
}

// call to start app
init();