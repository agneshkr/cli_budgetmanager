const inquirer = require('inquirer');
const questions = require('./questions.js')

console.log("Welcome to your Budget Manager ");
inquirer
    .prompt(questions)
    .then((answer)=> console.log("hi"))
    .catch((e)=>console.log(`error : ${e}`))
    