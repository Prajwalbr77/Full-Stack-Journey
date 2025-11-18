/*Write a JavaScript function to extract unique characters from a string. Example : str=“abcdabcdefgggh” ans=“abcdefgh */

let str = "aabbccddaaiaojfsaflksjflkfjdjfiejfsdj";
function uniqueChar(str){
    let ans = " ";
    for(let i=0;i<str.length;i++){
        let currentChar = str[i];
        if(ans.indexOf(currentChar)==-1){
            ans +=currentChar;
        }
    }
    return ans;
}

uniqueChar(str);




let str = "aabbccddaaiaojfsaflksjflkfjdjfiejfsdj";



