h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        h1.style.color=color;
        resolve("color changed!");
     },delay);
    });
}

changeColor("red",1000)
.then(()=>{
    console.log("red color was completed");
    return changeColor("purple",1000);
})
.then(()=>{
     console.log("purple color was completed");
    return changeColor("yellow",1000);
})
.then(()=>{
     console.log("yellow color was completed");
    return changeColor("lightblue",1000);
})
.then(()=>{
     console.log("lightblue color was completed");
});





// changeColor("red",1000 ,()=>{
//     changeColor("green",1000,()=>{
//         changeColor("blue",1000,()=>{
//             changeColor("yellow",1000,()=>{
//                 changeColor("pink");
//             });
//         });
//     });
// });


//callback nesting => callback hell

h1 = document.querySelector("h1");

function changeColor(color,delay){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
     },delay);
    });
}


