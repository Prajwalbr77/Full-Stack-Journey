/* Write a JavaScript function to count the number of vowels in a String argument*/
let str = "ApnaCollegePrajwal";
function countVowels(){
    let count =0;
    for(let i=0;i<str.length;i++){
        if(
            str.charAt(i) == "a" ||
            str.charAt(i) == "e" ||
            str.charAt(i) == "i" ||
            str.charAt(i) == "o" ||
            str.charAt(i) == "u" 
        )
        {
            count++;
        }
    }
    return count;
}