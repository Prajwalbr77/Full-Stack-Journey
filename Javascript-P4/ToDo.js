let todo =[];
let req =prompt("Enter the request :");
while(true){
    if(req =="quit"){
        console.log("Your are quiting the App!");
        break;
    }
    if(req =="list"){
        console.log("-----------");
        for(let i=0;i<todo.length;i++){
            console.log(i,todo[i]);
        }
        console.log("------------");
    }
    else if(req == "add"){
       let task =prompt("Please enter your task to add!");
       todo.push(task);
       console.log("Task is added !");
    }else if(req == "delete"){
        let idx = prompt("Please enter the task index");
        todo.splice(idx,1);
        console.log("Task is deleted !");
    } else{
        console.log("Sorry you request is invalid! ");
    }
    req = prompt("Please enter your request:");
}

console.log("Happy");
console.log("Happy");
console.log("Happy");
console.log("Happy");
