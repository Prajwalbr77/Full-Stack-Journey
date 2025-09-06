let url = "https://catfact.ninja/fact"
// fetch(url)
// .then((res)=>{
// return res.json();
// })
// .then((data)=>{
//     console.log("data1 :",data.fact);
//     return fetch(url);
// })
// .then((res)=>{
//     return res.json();
// })
// .then((data2)=>{
//     console.log("data2 =",data2.fact);
// })
// .catch((err)=>{
//     console.log("Error :",err);
// });

// console.log("This is me:");

/* Using async function and await*/

async function getFacts(){
    try{
 let res = await fetch(url);
    let data = await res.json();
    console.log(data.fact);

    let res1 = await fetch(url);
    let data1 = await res1.json();
    console.log(data1.fact);
    }
    catch (e) {
        console.log("error :",e);
    }
   

}

console.log("hello");
console.log("hello");
