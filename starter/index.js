const inquirer = reuire("inquirer");
const fs = reuire('fs');
const util = require('util')

const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [{
  type: "input",
  message: "What is the Title of the project",
  name: "Title" 
}, {
  type: "input",
  message: "What is the project about? and a give a detailed description of your contents",
  name: "Description"
}, {
  type: "input",
  message: "Table of contents",
  name: "Table of contents"
}, {
  type: "input",
  message: "what does the user need to install to run this app",
  name: "Installation"
}, {
  type: "input",
  message:"How is the App used to give instructions",
  name:"Usage"
}, {
type: "input",
message: "What Licence is being used?",
name: "License"
}, {
  type:"input",
  message:"What commands are needed to test this app?",
  name:"Tests"
}, {
  type:"input",
  message:"Who contributed to the project",
  name: "Contributing"
}, {
  type:"input"
  message:"Contact information for inquiries.",
  name:"Questions"
}, {
  type:"input",
  message:"What is your Github name?",
  name:"Username"
}, {
  type:"input",
  message:"What is your email address?",
  name: "Email"
},

];

// function to write README file
function writeToFile(fileName, data) {

  fs.writeFile(fileName, data, function(err) {
    console.log(fileName)
    console.log(data)
    if(err) {
      return console.log(err)
      } else {
        console.log("success")
    }
  })
  
}

// function to initialize program
function init() {
  inquirer.createPromptModule(questions)
  .then(function(data) {
    writeToFile("README.md", generatorMarkdown(data));
    console.log(data)
  })

}

// function call to initialize program
init();
