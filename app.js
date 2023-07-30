const geocode=require("./geocode")
const weather=require("./weather")
console.log("Please enter the country")
const country = process.argv[2]
geocode(country,(error,data)=>{
    console.log("error",error)
    console.log("data",data)
    if (data) {
    weather( data.latitude , data.longtitude ,(error,data)=>{
        console.log("error: ",error)
        console.log("wether: ",data)})}
        else{
            console.log("there is no data")
        }

})