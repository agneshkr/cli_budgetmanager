//const { time } = require("console");
//const pattern = require("./commonpatterns.js")
import time from 'console';
import pattern from "./commonpatterns.js";
import FormatedDates from "./utils/date.js"
import DBHandler from "./expenseData.js"

let questions =[
    {
        name:'expense',
        type:'input',
        message:'what is the expense? (format :<item> <price>)\n',
        validate: (response)=>{
            if(response.search(pattern.expense_pattern)){
                return "Invalid format";}
            else    
                return true;   
        },
        prefix:"1. "
    },
    {
        name:'date',
        type:'input',
        default: FormatedDates.todaysDate(),
        message:'when was the expense made?(format :dd/mm/yy)\n',
        validate: (response)=>{
            if(response.search(pattern.date_pattern))
                return "Invalid format";
            else
                return true;
        },
        prefix:"2. "
    },
    {
        name:'time',
        type:'input',
        default:'NA',
        message:'time ? (format <time><pm/am> Eg: 12pm)\n',
        validate: (response)=>{
            if(response.search(pattern.time_pattern) )//|| response.search(/NA/))
                return "Invalid time format";
            else
                return true;
        },
        prefix:"3. "
    },
    {
        name:'category',
        type:'input',
        message:'expense category?\n',
        prefix:"4.",
        when:async (answers)=>{
            let expense = answers.expense.split(" ")[0];

            let dbHandler = new DBHandler()            
            let category = await dbHandler.getCategory(expense);
            
            if(category==null)
                return true
            else
                return false;
        }
    },
    {
        name:'note',
        type:'input',
        default:'None',
        message:'description?\n',
        validate: (response)=>{
            return true;
        },
        prefix:"5. "

    },
    {
        name:'save',
        type:'confirm',
        default:true,
        message:"Do you want to save the above expense?",
        prefix:"6. "

    },
    /*
    {
        name:'continue',
        type:'confirm',
        default:false,
        message:"Do you want to add another expense?",

    },
    */

]

export default questions;