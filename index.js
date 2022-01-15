//const inquirer = require('inquirer');
//const questions = require('./questions.js');
//const database = require('./expenseData');
import inquirer from 'inquirer'
import questions from './questions.js'
import DBHandler from './expenseData.js';

let VERSION = 0.1;

let enterExpense=true;
//let dbHandler = new dbHandler();
let dbHandler = new DBHandler()

async function BudgetAppConsole(){
    console.log("Welcome to your Budget Manager ");
    await dbHandler.connect()
    console.log("handling questions")
    //while(enterExpense)
    //{
        console.log("Entering expense...")
        enterExpense=false;
        inquirer
            .prompt(questions)
            .then(async (answer)=> {
                //console.log(`type of answer : ${typeof answer}`);
                let str = JSON.stringify(answer, null, 4);
                console.log("Inside answer:"+str);
                if(answer.save){
                    console.log("Inside answer:"+answer);
                    enterExpense=true
                    await dbHandler.insert(answer)
                    //let expense = databaseHandler.getDBHandler();
                    //let randexp =await expense.findOne();
                    //console.log("randexp:"+randexp);
                }
                console.log('di;l;');
            })
            .catch((e)=>console.log(`error : ${e}`))
        console.log(enterExpense)
    //}   
}

BudgetAppConsole();