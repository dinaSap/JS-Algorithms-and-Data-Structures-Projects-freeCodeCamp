function rot13(str) {
const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const index = (str) => {
  let idx = alphabet.indexOf(str)
  if (idx >= 13){
    return idx - 13;
  } else {
    return idx + 13
  }
  return }
 let newStr = ''
 for (let i = 0; i < str.length; i++){
   if (str[i].match(/[\s\W_]/g)){
     newStr += str[i]
   }else{
   newStr += alphabet[index(str[i])]}
 }
 return newStr;
}


/*
JavaScript Algorithms and Data Structures Projects: Caesars Cipher
One of the simplest and most widely known ciphers is a Caesar cipher, also known as a shift cipher. 
In a shift cipher the meanings of the letters are shifted by some set amount.

A common modern use is the ROT13 cipher, where the values of the letters are shifted by 13 places.
Thus 'A' ↔ 'N', 'B' ↔ 'O' and so on.

Write a function which takes a ROT13 encoded string as input and returns a decoded string.

All letters will be uppercase. Do not transform any non-alphabetic character (i.e. spaces, punctuation),
but do pass them on.
*/
