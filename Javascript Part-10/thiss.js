let input = document.querySelector('input');

input.addEventListener('keyup',function(event){
     console.log("Code = ",event.code);
     if(event.code == 'KeyU'){
        console.log("Character is moved forward!");
     }  else if(event.code == 'KeyD'){
        console.log("Character is moved backward!");
     }
     else if(event.code == 'KeyL'){
        console.log("Character is moved left!");
     }
     else if(event.code == 'KeyR'){
        console.log("Character is moved right!");
     }
});