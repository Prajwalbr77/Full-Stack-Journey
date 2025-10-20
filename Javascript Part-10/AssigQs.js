let inp = document.querySelector('input');
let h3 = document.querySelector('h3');
inp.addEventListener('input',function(){
    const filtered = inp.value.replace(/[^A-Za-z\s]/g,'');
   if(filtered !== inp.value){
    inp.value = filtered;
   }
   console.log(filtered);
   h3.innerText = filtered;

});
