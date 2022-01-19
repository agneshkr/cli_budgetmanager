//const inquirer = require('inquirer');
//const questions = require('./questions.js');
//const database = require('./expenseData');
import inquirer from 'inquirer'
import questions from './questions.js'
import DBHandler from './expenseData.js';
import debugObject from './debug.js';

let VERSION = 0.1;

let enterExpense=true;
//let dbHandler = new dbHandler();
let dbHandler = new DBHandler()
let debug = debugObject
let printd = debug.printd

async function BudgetAppConsole(){
    //await dbHandler.connect()
    //debug.setDebug("true")
    //await dbHandler.connect();
    //debug.printDebugStatus()
    console.log("Welcome to your Budget Manager ");
    while(enterExpense){
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
                    //await dbHandler.connect();
                    await dbHandler.insertExpense(answer);
                    await dbHandler.insertCategory(answer);
                    //let expense = databaseHandler.getDBHandler();
                    //let randexp =await expense.findOne();
                    //console.log("randexp:"+randexp);
                }
                console.log('di;l;');
            })
            .catch((e)=>console.log(`error  : ${e}`))
        
            //console.log(enterExpense)
            //await dbHandler.close(); // if not included program won't exit.It will keep waiting to close the connection.
        
    }
}

BudgetAppConsole();