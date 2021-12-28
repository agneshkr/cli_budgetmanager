const inquirer = require('inquirer');
const questions = require('./questions.js')

enterExpense=true;

console.log("Welcome to your Budget Manager ");
while(enterExpense)
{
    enterExpense=false;
    inquirer
        .prompt(questions)
        .then((answer)=> {
            if(answer.continue){
                this.enterExpense=true
            }
        })
        .catch((e)=>console.log(`error : ${e}`))
    console.log(this.enterExpense)
}   