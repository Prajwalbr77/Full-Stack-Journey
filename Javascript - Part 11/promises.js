function savetoDb(data){
   return new Promise((resolve, reject)=>{
    let internetSpeed = Math.floor(Math.random()*10) +1;
    if(internetSpeed > 4){
        resolve("success: data was saved");
    } else {
        reject("failure: weak connection");
    }
   });
}

savetoDb("PRAJWAL BR")
.then(()=> {
    console.log("promise was resolved");
})
.catch(()=>{
    console.log("promise was rejected");
})





savetoDb("PRAJWAL BR")
.then(()=> {
    console.log("promise was resolved");
})
.catch(()=>{
    console.log("promise was rejected");
})
