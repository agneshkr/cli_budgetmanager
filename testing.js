//import debugObject from './debug.js'
//let debug = debugObject
//debug.printDebugStatus();


import DBHandler from './expenseData.js';

let dbHandler = new DBHandler();
async function run(){
    await dbHandler.connect();
    await dbHandler.getCategory("Netflix")
    await dbHandler.close()(
    console.log)
}
run();