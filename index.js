var inquirer = require("inquirer");
var fs = require("fs");

var fileName = "michael.md";


// array of questions for user
const questions = [

];

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name"
    },
    {
      type: "input",
      message: "What languages do you know?",
      name: "language"
    },
    {
      type: "input",
      message: "What is your preferred method of communication?",
      name: "communication"
    }
  ])
  .then(function(response) {
      
    writeToFile(fileName,response);

  });

// function to write README file
function writeToFile(file, response) {


    fs.writeFile(file,JSON.stringify(response,null, '\t'),function(err) {

    });
}

// function to initialize program
function init() {

}

