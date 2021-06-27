const fs = require('fs');
const inquirer = require('inquirer');
const generateHTML = require('./utils/generateHTML');

const questions = () => {
    return inquirer.prompt([

        // Title Section
        {
            type: 'input',
            name: 'name',
            message: 'What is the title of your application?'
        },
        // GitHub username
        {
            type: 'input',
            name: 'username',
            message: 'What is your GitHub username?'
        },
        // email
        {
            type: 'input',
            name: 'email',
            message: 'What is your email address?'
        }
    ])

    // send data to generateHTML.js
    .then(data => {
        return generateHTML(data);
    })

    // name the file to README.md
    .then(generatedReadme => {
        return writeToFile('README.md', generatedReadme);
    })
    
    // log error is any occur
    .catch(err => {
        console.log(err);
    })
};

// write readme file into ./generated folder
const writeToFile = (fileName, data) => {
    fs.writeFile(`./generated/${fileName}`, data, err => {
        if (err) {
            throw err;
        };
        console.log('Your README.md file has been generated.')
    });
}

// begin questions
const init = () => {
    questions();
}

// call to start app
init();