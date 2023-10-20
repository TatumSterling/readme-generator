const fs = require('fs');
const inquirer = require('inquirer');

inquirer
    .prompt([
        {
            type: "input",
            name: "name",
            message: "what's your name?"
        },
        {
            type: "input",
            name: "title",
            message: "what's your project title?"
        },
        {
            type: "input",
            name: "description",
            message: "what does this application do?"
        },
        {
            type: "checkbox",
            name: "languages",
            message: "what languages did you use?",
            choices: ['javascript', 'CSS', 'HTML', 'node.js', 'REACT', 'mySQL']
        },
        {
            type: "input",
            name: "summary",
            message: "give a short summary of what your application does"
        },
        {
            type: "input",
            name: "installation",
            message: "How do you install your application? If N/A please type N/A"
        },
        {
            type: "input",
            name: "link",
            message: "what is the link to your application?"
        },
        {
            type: "input",
            name: "visual",
            message: "what can the user expect to see when they open your application?"
        },
        {
            type: "input",
            name: "navigation",
            message: "How does a user navigate your website?"
        },
        {
            type: "input",
            name: "contributors",
            message: "were there any other contributors to this project?"
        },
        {
            type: "input",
            name: "tutorials",
            message: "were there any other resources you used?"
        },
        {
            type: "input",
            name: "title",
            message: "what's your project title?"
        },

    ]).then((response) => {
        console.log(response);
    });