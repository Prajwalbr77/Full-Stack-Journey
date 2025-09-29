let id = setInterval(()=>{
    console.log("Hello world");
},2000);

setTimeout(()=>{
    clearInterval(id);
    console.log("Clear interval ran");

},10000);

let id = setInterval(()=>{
},2000);


