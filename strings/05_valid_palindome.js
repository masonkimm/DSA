// A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

// Given a string s, return true if it is a palindrome, or false otherwise.

// Example 1:

// Input: s = "A man, a plan, a canal: Panama"
// Output: true
// Explanation: "amanaplanacanalpanama" is a palindrome.
// Example 2:

// Input: s = "race a car"
// Output: false
// Explanation: "raceacar" is not a palindrome.
// Example 3:

// Input: s = " "
// Output: true
// Explanation: s is an empty string "" after removing non-alphanumeric characters.
// Since an empty string reads the same forward and backward, it is a palindrome.

// Constraints:

// 1 <= s.length <= 2 * 105
// s consists only of printable ASCII characters.

/**
 * @param {string} s
 * @return {boolean}
 */

const s = 'A man, a plan, a canal: Panama'

const pal = (x) => {
  const original = x.toLowerCase().replace(/[^a-z0-9]/g, '')
  const reversed = original.split('').reverse().join('')
  console.log(reversed)
  return original === reversed
}

console.log(pal(s))


var isPalindrome = function (s) {
  // convert to lowercase
  // const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '')

  // let left = 0
  // let right = cleaned.length -1

  // while (left < right) {
  //   if (cleaned[left] !== cleaned[right]) {
  //     return false
  //   }
  //   left++
  //   right--
  // }

  // return true

  // lower case, replace regex
  const cleaned = s.toLowerCase().replace(/[^a-z0-9]/g, '')
  // split the cleaned version into array, reverse it, and join it back
  const cleanedReversed = cleaned.split('').reverse().join('')

  // compare the two
  return cleaned === cleanedReversed
}

console.log(isPalindrome(s))
