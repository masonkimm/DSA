// Write a function that reverses a string. The input string is given as an array of characters s.

// You must do this by modifying the input array in-place with O(1) extra memory.

const s2 = ['h','e','l','l','o']

const reverse = (s2) => {
  return s2.reverse()
}

console.log(reverse(s2))




// Example 1:

// Input: s = ["h","e","l","l","o"]
// Output: ["o","l","l","e","h"]
// Example 2:

// Input: s = ["H","a","n","n","a","h"]
// Output: ["h","a","n","n","a","H"]

// Constraints:

// 1 <= s.length <= 105
// s[i] is a printable ascii character.

/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */

// const s = ['h', 'e', 'l', 'l', 'o']
// var reverseString = function (s) {
//   // reversedArr = []
//   // for (let i=s.length-1; i >= 0; i--) {
//   //     reversedArr.push(s[i])
//   //   }
//   return s.reverse()
// }

// console.log(reverseString(s))
