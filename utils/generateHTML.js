// generate markdown for README using data sent from index.js
const generateMarkdown = (data) => {
  return `
  
  email: [${data.email}](${data.email})
  `;
}

module.exports = generateHTML;