const inquirer = require("inquirer");
const fs = require("fs");

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
            message: "Please enter your email address: ",
            name: "questions",
        },
    ])
    .then((response) => {
        const readme = `
        # <${response.title}>

        ## Description
        
        ## Table of Contents (optional)
        
        ## Installation 
        
        ## Collaborators
        
        ## License
        
        ## Badge
        
        ## How to Contribute
        
        ## Tests
        
        
        ## If you have further questions feel free to contact me at 
        []
        `;
        fs.writeFile('README.md', readme, (err) =>
            err ? console.error(err) : console.log('Success!')
        );
    })