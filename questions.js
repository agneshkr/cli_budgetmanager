const { time } = require("console");

questions =[
    {
        name:'expense',
        type:'input',
        message:'what is the expense? (format :<item> <price>)\n',
        validate: (response)=>{
            expense_pattern=/[a-z]+\s[0-9]+/
            if(response.search(expense_pattern)){
                return "Invalid format";}
            else    
                return true;   
        }
    },
    {
        name:'date',
        type:'input',
        default:"12/12/1998",
        message:'when was the expense made?(format :dd/mm/yy)\n',
        validate: (response)=>{
            date_pattern = /[0-9]{1,2}\/[0-9]{1,2}\/[0-9]{2}/
            if(response.search(date_pattern))
                return "Invalid format";
            else
                return true;
        }
    },
    {
        name:'time',
        type:'input',
        default:'NA',
        message:'time ? (format <time><pm/am> Eg: 12pm)\n',
        validate: (response)=>{
            time_pattern = /(?:1[0-2]|[0-9])\s*(?:pm|am)/
            if(response.search(time_pattern) )//|| response.search(/NA/))
                return "Invalid time format";
            else
                return true;
        }
    },
    {
        name:'category',
        type:'checkbox',
        default:'12:02:1998',
        message:'category?(Select from the list)\n',
        choices:['food','petrol','rent'],
        validate: (response)=>{
            if(response == "t")
                return "Buy something else";
            else
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

]
module.exports = questions