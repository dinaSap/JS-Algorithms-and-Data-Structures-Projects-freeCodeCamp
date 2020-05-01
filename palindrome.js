function palindrome(str) {
 let newStr = str.replace(/[\W_\s]/g, '').toLowerCase()
 let reversed = newStr.split('').reverse().join('')
 return newStr === reversed
}

/*
Return true if the given string is a palindrome. Otherwise, return false.

Note
You'll need to remove all non-alphanumeric characters (punctuation, spaces and symbols) 
and turn everything into the same case (lower or upper case) in order to check for palindromes.
*/
