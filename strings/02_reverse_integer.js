// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

const num = [1,2,34]

const func = (num) =>{
  return num.join('')
}

console.log(func(num))
 

// Example 1:

// Input: x = 123
// Output: 321
// Example 2:

// Input: x = -123
// Output: -321
// Example 3:

// Input: x = 120
// Output: 21
 

// Constraints:

// -231 <= x <= 231 - 1


/**
 * @param {number} x
 * @return {number}
 */

const x = -123

// var reverse = function(x) {
//   let reversed = parseInt(Math.abs(x).toString().split('').reverse().join(''))
//   // if negative
//   if (x < 0 ) reversed = -reversed

//   return reversed
// };

// console.log(reverse(x))