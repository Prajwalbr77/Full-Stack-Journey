let num = [22,3,8,4,1];
let minn = num.reduce((min,ele)=>{
    if(min<ele){
        return min;
    }else{
        return ele;
    }
});
console.log(minn);