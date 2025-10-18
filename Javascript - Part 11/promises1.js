function savetoDb(data,success,failure){
    let internetSpeed = Math.floor(Math.random()*10) +1;
    if(internetSpeed > 4){
        success();
    }else{
      failure();
    }
}

savetoDb(
    "PRAJWAL BR",
    ()=>{
 console.log("Your data was saved:");
 savetoDb(
    "Hello world",
     ()=>{
    console.log("success2: data2 saved");
    savetoDb("GoodMorning",()=>{
        console.log("success3: data3 saved");
    },()=>{
        console.log("failure3: weak connection");
    })
 }, 
 ()=>{
    console.log("failure2 : weak connection");
 })
},
() =>{
    console.log("weak connection. data not saved");

});







() =>{
    console.log("weak connection");

});


