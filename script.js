"use strict";

/*Your goal is to create a function that removes the first and last characters of a string. You're given one parameter, the original string. You don't have to worry with strings with less than two characters.*/ 


function removeChar(str){
 //You got this!
let arr1 = str.split('')
arr1.shift()
arr1.pop()
return arr1.join('')
}