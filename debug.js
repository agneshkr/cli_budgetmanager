let DEBUG = true;

class Debugger{
    constructor(){
        this.DEBUG = DEBUG;
    }
    printd(message){
        if(this.DEBUG){
            console.log(message)
        }
    }
    setDebug(status){
        if(status == "true" || status == "false"){
            this.DEBUG=status
        }
    }
    getDebugStatus(){
        return this.DEBUG;
    }
    printDebugStatus(){
        console.log(this.DEBUG);
    }
};
let debugObject = new Debugger();
export default debugObject;