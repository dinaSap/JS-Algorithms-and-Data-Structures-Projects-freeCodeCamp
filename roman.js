function convertToRoman(num) {
 let obj = {
ones: ['', 'I', 'II', 'III', 'IV', 'V', 'VI', 'VII', 'VIII', 'IX'],
tens: ['', 'X', 'XX', 'XXX', 'XL', 'L', 'LX', 'LXX', 'LXXX', 'XC'],
hundreds: [ '', 'C', 'CC', 'CCC', 'CD', 'D', 'DC', 'DCC', 'DCCC', 'CM'],
thousands: ['', 'M', 'MM', 'MMM', 'MMMM']
}
 const toTens = (n) => {
   let arr = []
   let i = 1
   while (n > 0) {
     arr.unshift((n%10)*i)
     n = Math.floor(n/10)
     i *= 10
   }
   return arr.filter(el => el !== 0)
 }
 let arr = toTens(num)
 let str = ''
 for (let i = 0; i < arr.length; i++){
   if (arr[i] >= 1000){
     str += obj['thousands'][Math.floor(arr[i]/1000)]
   }else if (arr[i] >= 100){
     str += obj['hundreds'][Math.floor(arr[i]/100)]
   }else if (arr[i] >= 10){
     str += obj['tens'][Math.floor(arr[i]/10)]
   }else {
     str += obj['ones'][arr[i]]
   }
 }
 return str
}

/*
JavaScript Algorithms and Data Structures Projects: Roman Numeral Converter
Convert the given number into a roman numeral.

All roman numerals answers should be provided in upper-case.
*/
