// let arr = [1,2,3,4,55,6,8];
// let max = arr.reduce((max,ele)=>{
//     if(max<ele){
//         return ele;
//     }else{
//         return max;
//     }
// });
// console.log(max);

let arr = [1,2,3,44,5,6,54];
let max = arr.reduce((max,ele)=>{
    if(max<ele){
        return ele;
    }else{
        return max;
    }
});
console.log(max);