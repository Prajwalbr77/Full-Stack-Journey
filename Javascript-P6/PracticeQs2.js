function rollDice(){
  let dice = Math.floor(Math.random()*6)+1;
  console.log(dice);
}
function table(){
  for(let i=1;i<=10;i++){
    console.log(i*i);
  }
}
table();
