let para1 = document.createElement('p');
para1.innerText="Heyy iam red";
document.querySelector('body').append(para1);
para1.classList.add('red');

let h3 = document.createElement('h3');
h3.innerText="Heyy iam blue";
document.querySelector('body').append(h3);
h3.classList.add('blue');

let div = document.createElement('div');
let h1 = document.createElement('h1');
let para2 = document.createElement('p');

h1.innerHTML="iam in div";
para2.innerText="Me to!!";
div.append(h1);
div.append(para2);
div.classList.add('box');
document.querySelector('body').append(div);