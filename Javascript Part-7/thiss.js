const student ={
    name : "Prajwal",
    age : 21,
    coding : 78,
    knowledge : 80,
    ability : 95,
    getAvg(){
        let avvg = (this.age + this.coding + this.knowledge) /3;
        console.log(avvg);
    }
}