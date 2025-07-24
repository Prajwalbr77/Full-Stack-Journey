const max =prompt("Enter the max value!");
const random = Math.floor(Math.random()*max)+1;
let guess = prompt("Guess the number!");
while(true){
    if(guess =="quit"){
        console.log("You quit!");
        break;
    }
    if(guess == random){
        console.log("Congratulations you got it",random);
        break;
    }
    else if(guess < random){
        guess =prompt("Your guess is small");
    }
    else{
        guess = prompt("Your guess is large !");
    }
}


console.log("hello");
