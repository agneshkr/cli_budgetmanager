//const { time } = require("console");
//const pattern = require("./commonpatterns.js")
import time from 'console';
import pattern from "./commonpatterns.js";
import FormatedDates from "./utils/date.js"

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
        type:'checkbox',
        default:'12:02:1998',
        message:'category?(Select from the list)\n',
        choices: findPossibleCategories,
        validate: (response)=>{
            if(response == "t")
                return "Buy something else";
            else
                return true;
        },
        prefix:"4.",
        when:()=>{
            return true;
        }
    },
    {
        name:'note',
        type:'input',
        default:'None',
        message:'description?\n',
        validate: (response)=>{
            return true;
        }
    },
    {
        name:'save',
        type:'confirm',
        default:true,
        message:"Do you want to save the above expense?",

    },
    {
        name:'continue',
        type:'confirm',
        default:true,
        message:"Do you want to add another expense?",

    },

]

export default questions;