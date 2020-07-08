//All variables needed
const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
let fileName = "michael.md";

//Questions for user
const questions = [

  {
    type: "input",
    message: "Please enter your project title.",
    name: "title"
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
      
    writeToFile(fileName,response);

  });
}

//Write the file
function writeToFile(fileName,response){

  //Convert it into markdown file format
  const markdown = generateMarkdown(response);
  //Actually create the file, message when succesful
  fs.writeFile(fileName, markdown, error => error ? console.error(error) : console.log(`${fileName} generated!`))

}

//Call initiation
init();