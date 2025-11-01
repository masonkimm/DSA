// Given two strings needle and haystack, return the index of the first occurrence of needle in haystack, or -1 if needle is not part of haystack.

// Example 1:

// Input: haystack = "sadbutsad", needle = "sad"
// Output: 0
// Explanation: "sad" occurs at index 0 and 6.
// The first occurrence is at index 0, so we return 0.
// Example 2:

// Input: haystack = "leetcode", needle = "leeto"
// Output: -1
// Explanation: "leeto" did not occur in "leetcode", so we return -1.

// Constraints:

// 1 <= haystack.length, needle.length <= 104
// haystack and needle consist of only lowercase English characters.

/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */

const a = 'sadbutsad'
const b = 'but'

var strStr = function (haystack, needle) {
  const m = haystack.length // 9
  const n = needle.length // 3

  // for loop from 0 to 6 (9-3)
  for (i=0; i< m-n; i++){
    if (haystack.slice(i, i+n)=== needle){
      return i
    }
  }

  //first loop: i=0; i < 6, haystack.slice(0,3) === 'sad' === needle --> return 0
  //second loop: i=1, haystack.slice(1,4) === 'adb' !== needle --> go to next loop
  //third loop: i=2, haystack.slice(2,5) === 'dbu' !== needle --> go to next loop
  //fourth loop: i=3, haystack.slice(3,6) === 'but' !== needle --> go to next loop
  //fifth loop: i=4, haystack.slice(4,7) === 'uts' !== needle --> go to next loop
  //sixth loop: i=5, haystack.slice(5,8) === 'tsa' !== needle --> go to next loop
  //seventh loop: i=6, haystack.slice(6,9) === 'sad' === needle --> return 6

  //first loop: i=0; i < 6, haystack.slice(0,3) === 'sad' !== 'but' --> go to next loop
  //second loop: i=1, haystack.slice(1,4) === 'adb' !== 'but' --> go to next loop
  //third loop: i=2, haystack.slice(2,5) === 'dbu' !== 'but' --> go to next loop
  //fourth loop: i=3, haystack.slice(3,6) === 'but' === 'but' --> return 3
  

  return -1
}
// var strStr = function (haystack, needle) {
//   return haystack.indexOf(needle)
// }

console.log(strStr(a, b))
