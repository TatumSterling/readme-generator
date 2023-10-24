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
            name: "purpose",
            message: "why did you create this application?"
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
        console.log("I am creating your README.md file. Please make sure to read over your file for any grammatical errors that may have happened between the template and your answers before using.");
        const readMeTemplate = `#${response.title} 
        ## Description
        Hi! My name is ${response.name}, and this is my ${response.title} application. This application was designed to ${response.description}.
        I created it ${response.purpose}, and I used ${response.languages} to bring ${response.title} to life!
        
        `
        fs.writeFile('README.md', readMeTemplate,(err) => err ? console.log(err) : console.log("success"))
    });

    // function createReadMe () {
    //     `#${response.title} 
    //     ## Description
    //     Hi! My name is ${response.name}, and this is my ${response.title} application. This application was designed to ${response.description}.
    //     I created it ${response.purpose}, and I used ${response.languages} to bring ${response.title} to life!
        
    //     `
    // }