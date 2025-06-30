/* Write a JavaScript function that accepts a list of country names as input and returns the longest country name as output.
  Ex : country = ["Australia","Germany","United States of America"]
   output : "United States of America"*/
   let country = ["Australia","Germany","North korea","United kingdom"];
   function logestName(country){
    let ansIndx =0;
    for(let i=0;i<country.length;i++){
        let ansLen = country[ansIndx].length;
        let currlen = country[i].length;
        if(currlen > ansLen){
            ansIndx = i;
        }
    }
    return country[ansIndx];
   }
   logestName(country);


