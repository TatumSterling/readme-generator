const fs = require('fs');
const inquirer = require('inquirer');

const licenseList = [
    'Academic Free License: AFL 2.1 and AFL 3.0',
    'Academy of Motion Picture Arts and Sciences BSD or A.M.P.A.S',
    'Apache License 2.0',
    'Artistic License 1.0 and Artistic License 2.0',
    'ASL 1.1 (Apache Software License 1.1)',
    'Autodesk DWF Toolkit',
    'Beerware License',
    'Boost Software License',
    'BSD (occasionally referred to as the "University of California" license)',
    'BSD 3-clause (sometimes called BSD-new)',
    'BSD + Patent',
    'BSD - AES variant',
    'CERN Geant4 License v1.0/Geant4',
    'CERN Open Hardware License 2 - Permissive Variant',
    'Community Data License Agreement - Permissive',
    'Creative Commons "Attribution" (CC BY) license',
    'JSON License (MIT license with the added note: "The Software shall be used for Good, not Evil.")',
    'Eclipse Distribution License (BSD variant)',
    'FreeType Project License',
    'Historical Permission Notice and Disclaimer',
    'ImageMagick License',
    'ISC License',
    'libjpeg-turbo',
    'LibTIFF',
    'Lucent Public License 1.02 (used by Plan 9 now, but different from "the Plan 9 license")',
    'Microsoft Public License (MS-PL)',
    'MIT/X11/Expat',
    'MIT adapted by CMU',
    'NCSA',
    'National Institute of Standards and Technology (NIST) Software License',
    'OpenSSL',
    'PHP License 2.02 and 3.0',
    'PostgreSQL License',
    'Python Imaging Library (PIL) License',
    'Python Software Foundation',
    'Solderpad Hardware License',
    'STLport License',
    'TCP Wrappers',
    'Unicode, Inc. License Agreement - Data Files and Software',
    'Universal Permissive License (UPL), Version 1.0',
    'W3C Software license',
    'WTFPL',
    'X.Net',
    'Zend Engine License, v2.00',
    'zlib/libpng',
    'ZPL',
]

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
            message: "were there any other contributors to this project? (Please leave blank if non applicable)"
        },
        {
            type: "input",
            name: "resources",
            message: "were there any other resources you used? (Please use N/A if non applicable)"
        },
        {
            type: "input",
            name: "test",
            message: "How do you test your software?(Please use N/A if non applicable)"
        },
        {
            type: "input",
            name: "questions",
            message: "How do you test your software?(Please use N/A if non applicable)"
        },
        {
            type: "list",
            name: "license",
            message: "please select a license",
            choices: licenseList
        }
            


    ]).then((response) => {
        console.log("I am creating your README.md file. Please make sure to read over your file for any grammatical errors that may have happened between the template and your answers before using.");
        const readMeTemplate =
            `#${response.title} 
        ## Description
        Hi! My name is ${response.name}, and this is my ${response.title} application. This application was designed to ${response.description}.
        I created it ${response.purpose}, and I used ${response.languages} to bring ${response.title} to life!
        ## Installation 
        ${response.installation}
        ## Usage
        To use this application, install anything nevessary from the installation section, then click the link below to be redirected to the app. 
        From there, you can expect to see ${response.visual}. To navigate, you may ${response.navigation}.
        ## License
        ${response.license}
        ## Contributing
        ${response.contributors}
        ${response.resources}
        ## Tests
        ${response.test}
        ## Questions 
        `
        fs.writeFile('README.md', readMeTemplate, (err) => err ? console.log(err) : console.log("success"))
    });
