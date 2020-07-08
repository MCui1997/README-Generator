//All variables needed
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
let badge = ""; 
let fileName = "michael.md";


//Questions for user
const questions = [

  {
    type: "input",
    message: "Please enter your project title.",
    name: "title"
  },
  {
    type: "list",
    message: "Please choose one of the licenses from below",
    name: "license",
    choices: ["None", "MIT", "Apache", "BSD3", "GPLv3"]
  },
  {
    type: "input",
    message: "Please write a short description for your project.",
    name: "description"
  },
  {
    type: "input",
    message: "Please enter the installation instructions.",
    name: "installation"
  },
  {
    type: "input",
    message: "Please enter the usage instructions.",
    name: "usage"
  },
  {
    type: "input",
    message: "Please enter the contribution guidelines.",
    name: "contribution"
  },
  {
    type: "input",
    message: "Please enter testing instructions.",
    name: "tests"
  },
  {
    type: "input",
    message: "Please enter your GitHub username.",
    name: "username"
  },
  {
    type: "input",
    message: "Please enter your email address",
    name: "email"
  },
 
];

//Initiation function to run code using inquirer prompt
function init(){
  
inquirer
  .prompt(questions)
  .then(function(response) {

    //Picking out the badge

    switch(response.license){

      case 'Apache':
        badge = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
        break;
      
      case 'MIT':
        badge = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
        break;

      case 'GPLv3':
        badge = "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
        break;

      case 'BSD3':
        badge = "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
        break;

      }

      
    writeToFile(fileName,response,badge);

  });
}

//Write the file
function writeToFile(fileName,response,badge){

  //Convert it into markdown file format
  const markdown = generateMarkdown(response,badge);
  //Actually create the file, message when succesful
  fs.writeFile(fileName, markdown, error => error ? console.error(error) : console.log(`${fileName} generated!`))

}

//Call initiation
init();