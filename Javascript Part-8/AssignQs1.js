let num = [1,2,3,4,5];

const square = num.map((num)=>num*num);
console.log(square);
let sum = square.reduce((acc,cur)=> acc+cur);
console.log(sum);
let avg = sum / num.length;
console.log(avg);