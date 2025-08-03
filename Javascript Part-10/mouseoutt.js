let test = document.querySelector("#test");
test.addEventListener("mouseout",(event)=>{
    event.target.style.color = "red";

    setTimeout(()=>{
       event.target.style.color="";
    },500);
},
false,
);