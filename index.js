const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');

const questions = () => {
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
            name: 'office',
            message: 'What is their office number?'
        }

    .then(console.log('Please enter the information for the next team member.'))
        
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
            name: 'gitHub',
            message: 'What is their GitHub username?'
        },
        // School section, if "intern" role is selected
        {
            type: 'input',
            name: 'school',
            message: 'What school does this team member attend?'
        },

        // Continue/Finish section
        {
            type: 'list',
            name: 'continueFinish',
            message: 'What would you like to do now?',
            choices: ['Add an employee', 'Generate file']
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