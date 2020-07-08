# README Generator (Node.js)

## Links

Repo: https://github.com/MCui1997/README-Generator/

## Description

This generator takes user inputs from the command line to help generate a professional README. 

* The generated README includes the following sections with user information displayed: 

  * Title
  * Description
  * Table of Contents
  * Installation
  * Usage
  * License
  * Contributing
  * Tests
  * Questions
  
* The generated README also includes a license badge. 

## User Story

```
AS A developer
I WANT a README generator
SO THAT can quickly create a professional README for a new project
```

## Acceptance Criteria

```
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a quality, professional README.md is generated with the title of your project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added hear the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Screenshots

Step 1: After cloning, right click on Dev file and open in terminal.
![Alt text](/screenshots/Terminial.png "Optional Title")

Step 2: Answer the prompts
![Alt text](/screenshots/Prompts.png "Optional Title")

Step 3: Upon completion, a README file will be generated
![Alt text](/screenshots/Completed.png "Optional Title")

Step 4: Preview your README
![Alt text](/screenshots/Final.png "Optional Title")
