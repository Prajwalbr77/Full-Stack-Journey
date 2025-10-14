let btn = document.querySelector('button');
console.dir(btn);

// btn.onclick = function(){
//     alert("Button is clicked!!");
// }

// function sayhello(){
//     alert("hello");
// }

// btn.onclick = sayhello;
let btn2 = document.querySelectorAll('button');
for(btns of btn2){
    // btns.addEventListener ("click",sayhello);
    // btns.addEventListener ("click",sayName);
    btns.addEventListener ("dblclick" ,function(){
        console.log("You double clicked!!");
    });
}

function sayhello(){
    alert("hello");
}
function sayName(){
    alert("Apna college");

}




function sayhello(){
}



