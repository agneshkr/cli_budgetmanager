//const {MongoClient} = require("mongodb");
// using es6 format
import pkg from 'mongodb';
const {MongoClient} = pkg;

export default class DBHandler{
    constructor(){
        const uri = "mongodb+srv://agnai:huhunewpass@sandbox.vzogy.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
        this.client = new MongoClient(uri);
    }    
    async connect(){
        await this.client.connect()
        this.expense= this.client.db('expenses').collection('daily_expense');
        //let testdata= await this.expense.findOne()
        //console.log(testdata);
    }
    async getDBHandler(){
        return this.expense;
    }
    async parseData(data){
        
    }
    async insert(data){
        await this.expense.insertOne({"title1":data});
        console.log("Connection Established");
    }
}
//export default DBHandler;  or made inline as shown
