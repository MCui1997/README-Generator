//All variables needed
var inquirer = require("inquirer");
var fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown.js");
var fileName = "michael.md";

//Questions for user
const questions = [

  {
    type: "input",
    message: "What is the title of your Readme?",
    name: "title"
  },
  {
    type: "input",
    message: "Please write a short description for your project.",
    name: "description"
  },
  {
    type: "input",
    message: "What is your preferred method of communication?",
    name: "communication"
  }

];

//Initiation function to run code
function init(){
  
inquirer
  .prompt(questions)
  .then(function(response) {
      
    writeToFile(fileName,response);

  });
}

//Write the file
function writeToFile(filename,response){

  const markdown = generateMarkdown(response);
  fs.writeFile(filename,JSON.stringify(markdown, null, '\t'),function(err) {
  });

}

//Call initiation
init();