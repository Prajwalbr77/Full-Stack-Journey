function sum(...args){
    return args.reduce((sum,ele) =>sum+ele);
};

function min(...arr){
    return arr.reduce((min,ele)=>{
        if(min > ele){
            return ele;
        }else{
            return min;
        }
    })
};