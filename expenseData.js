//const {MongoClient} = require("mongodb");
// using es6 format
import pkg from 'mongodb';
import debugObject from './debug.js'
let debug = debugObject;
const {MongoClient} = pkg;

export default class DBHandler{
    constructor(){
        const uri = "mongodb+srv://agnai:huhunewpass@sandbox.vzogy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        this.client = new MongoClient(uri);
    }    
    async connect(){
        await this.client.connect()
        if(!debug.getDebugStatus()){
            this.expense= this.client.db('expenses').collection('daily_expense');
            this.expense_categories = this.client.db('expenses').collection('expense_categories');
        }
        else{
            this.expense= this.client.db('expenses_test').collection('daily_expense');
            this.expense_categories = this.client.db('expenses_test').collection('expense_categories');
        }
        
        //let testdata= await this.expense.findOne()
        //console.log(testdata);
    }
    async close(){
        await this.client.close();
    }
    async test(){
        let randomExpense = await this.expense.findOne();
        console.log(randomExpense);
    }
    async getDBHandler(){
        return this.expense;
    }
    async getCategory(expense){
        await this.connect();
        let category = await this.expense_categories.findOne({"expense":expense});
        await this.close()
        return category; 
    }
    parseData(data){
        let parsedData= {};
        parsedData['expense']=data.expense.split(" ")[0];
        parsedData['price']=data.expense.split(" ")[1];
        parsedData['date']=data.date;
        parsedData['time']=data.time;
        parsedData['note']=data.note;
        parsedData['category']=data.category;
        let date = new Date();
        parsedData['timestamp']=date.getUTCSeconds();

        return parsedData;
    }
    async insertCategory(data){
        await this.connect();
        if(data.category!=null){
            await this.expense_categories.insertOne({"expense":data.expense.split(" ")[0],"category":data.category});
        }
        await this.close();
    }
    async insertExpense(data){
        await this.connect();

        data = this.parseData(data);
        await this.expense.insertOne(data);

        await this.close();
        console.log("Connection Established");
    }

}
//export default DBHandler;  or made inline as shown
