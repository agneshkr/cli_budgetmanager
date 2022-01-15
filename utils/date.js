export default class FormatedDates{
    
    static todaysDate(format= null){
        let date = new Date();
        let day= date.getDay().toString()
        if(day.length == 1)
            day= "0"+day;
        let month = date.getMonth().toString()
        month+=1;
        if(month.length == 1)
            month= "0"+month;
        let year = date.getUTCFullYear().toString()
        year = year.slice(2,4);
        
        return (day+"/"+month+"/"+year);
        
    }
}
