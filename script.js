const inquirer = require("inquirer");
const fs = require("fs");
const {
    report
} = require("process");

inquirer
    .prompt([{
            type: "input",
            message: "What is the title of your project?",
            name: "title",
        },
        {
            type: "input",
            message: "Give a description of your project: ",
            name: "description",
        },
        {
            type: "input",
            message: "(optional) Please enter a table of contents: ",
            name: "contents",
        },
        {
            type: "input",
            message: "What is required to install and run your project",
            name: "installations",
        },
        {
            type: "input",
            message: "List all contributors for your project: ",
            name: "collaborators",
        },
        {
            type: "input",
            message: "Please enter your email address: ",
            name: "questions",
        },
    ])
    .then((response) => {
        const readme = `
# Title <${response.title}>

## Description
${response.description}
        
## Table of Contents (optional)
${response.contents}

## Installation 
${response.installation}
 
## Collaborators
${response.collaborators}
        
## License
${response.license}   


## How to Contribute


## Tests
        
## If you have further questions feel free to contact me at 
[${response.questions}]
        `;
        fs.writeFile('README.md', (readme, badgeChoice), (err) => err ? console.error(err) : console.log('Success!'));
    })

