async function greet() {
    throw "404 page not found";
    return "hello";
}

greet()
.then((result)=>{
    console.log("promise was resolved");
    console.log("Result was :",result);
})
.catch((err)=>{
    console.log("promise was rejected",err);
});

let demo = async () => {
    return 5;

}




.catch((err)=>{
});

