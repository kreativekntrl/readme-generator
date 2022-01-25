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
            message: "Provide a short description explaining the what, why, and how of your project: ",
            name: "description",
        },
        {
            type: "input",
            message: "What is required to install and run your project?",
            name: "installations",
        },
        {
            type: "list",
            message: "Choose a license to create your badge:",
            name: "license",
            choices: [{
                    name: "MIT license",
                    value: "MIT"
                },
                {
                    name: "Apache License 2.0",
                    value: "Apache"
                },
                {
                    name: 'BSD 3-Clause "New" or "Revised" license',
                    value: "BSD3"
                },
                {
                    name: "GNU General Public License (GPL)",
                    value: "GPL"
                },
            ],
        },
        {
            type: "input",
            message: "List all contributors for your project: ",
            name: "collaborators",
        },
        {
            type: "input",
            message: "Please instruct how to contribute: ",
            name: "contributions",
        },
        {
            type: "input",
            message: "please provide instructions on how to run any tests for your application:  ",
            name: "tests"
        },
        {
            type: "input",
            message: "Please enter your email address: ",
            name: "questions",
        },
    ])
    .then(function (response) {
        // Create a license string
        let badge;
        switch (response.license) {
            case "MIT":
                badge =
                    "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
                break;
            case "Apache":
                badge =
                    "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
                break;
            case "BSD3":
                badge =
                    "[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
                break;
            case "GPL":
                badge =
                    "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
                break;

            default:
                throw new Error(`Invalid license ${response.license}`);
        }

        const readme = `
# Title <${response.title}>
${badge}

## Description
${response.description}

## Table of contents
[Title <${response.title}>](#title)
- [Description](#description)
- [Installation](#installation)
- [Collaborators](#collaborators)
- [License](#license)
- [How to Contribute](#how-to-contribute)
- [Tests](#tests)
- [If you have further questions feel free to contact me at](#Questions)

## Collaborators 
${response.collaborators}

## Installation 
${response.installation}

## Collaborators
${response.collaborators}
        
## License
${response.license}     

---
           
## How to Contribute
[Contributor Covenant](${response.contributions})
        
## Tests
${response.tests}
        
## Questions
If you have further questions feel free to contact me at 
[${response.questions}]
        `;
        fs.writeFile('README.md', readme, (err) => err ? console.error(err) : console.log('Success!'));
    })