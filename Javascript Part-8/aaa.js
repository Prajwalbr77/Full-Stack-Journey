let num = [1,2,3,4,5];
let square = num.map((square)=> square*square);
console.log(square);

let sum = square.reduce((acc,curr)=>acc+curr);
console.log(sum);
let avg = sum/num.length;
console.log(avg);