// generate content for HTML using data sent from index.js with classes
const createManager = (manager) => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${manager.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Manager</h6>            
            <p class="card-text">ID: ${manager.id}</p>
            <p class="card-text">Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
            <p class="card-text">Office Number: ${manager.officeNumber}</p>
        </div>
    </div>
    `;
};

const createEngineer = (engineer) => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${engineer.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Engineer</h6>     
            <p class="card-text">ID: ${engineer.id}</p>
            <p class="card-text">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
            <p>GitHub: <a href="https://github.com/${engineer.github}" target="_blank">${engineer.github}</a></p>
        </div>
    </div>
    `;
};

const createIntern = (intern) => {
    return `
    <div class="card" style="width: 18rem;">
        <div class="card-body">
            <h5 class="card-title">${intern.name}</h5>
            <h6 class="card-subtitle mb-2 text-muted">Intern</h6>     
            <p class="card-text">ID: ${intern.id}</p>
            <p class="card-text">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
            <p class="card-text">School: ${intern.school}</p>
        </div>
    </div>
    `;
};

// loop through array sent from index.js and add classes based on role
const generateHTML = (data) => {
    teamArray = []; 

    for (let i = 0; i < data.length; i++) {
        const employee = data[i];
        const role = employee.getRole(); 

        // create corresponding cards based on role
        // manager role
        if (role === 'Manager') {
            const managerCard = createManager(employee);
            teamArray.push(managerCard);
        }
        // engineer role
        if (role === 'Engineer') {
            const engineerCard = createEngineer(employee);
            teamArray.push(engineerCard);
        }
        // intern role
        if (role === 'Intern') {
            const internCard = createIntern(employee);
            teamArray.push(internCard);
        }
    };

    // 
    const teamCards = teamArray.join('')
    const createTeam = createHTML(teamCards); 
    return createTeam;
};

const createHTML = (teamCards) => {
    return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css">
        <title>Team Profile Generator</title>
    </head>

    <body>
        <!-- title/hero section -->
        <header class="hero">
            <h1 class="display-3">My Team</h1>
        </header>

        <!-- team section -->
        <div class="container">
            ${teamCards}
        </div>
    </body>
    </html>
    `;
};

module.exports = generateHTML;