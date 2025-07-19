function oddEvennFactory(request){
    if(request=="odd"){
      return function(n){
    console.log(!(n%2==0));
}
    }
    else if(request =="even"){
      return function(n){
    console.log(n%2==0);
      }
    }
    else{
        console.log("Wrong request!");
    }
}
let req = "odd";



function oddEvenFactory(request){
  if(request == "odd"){
    let odd = function(n){
      console.log(!(n%2==0));
    }
    return odd;
  }
  else if(request =="even"){
    let even = function(n){
      console.log(n%2==0);
    }
    return even;
  }
  else{
    console.log("Wrong request!");
  }

}
let request = "even";

console.log("hello");
console.log("hello");
console.log("hello");
console.log("hello");
