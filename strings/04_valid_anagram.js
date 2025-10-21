// Given two strings s and t, return true if t is an anagram (letters b/w two words) of s, and false otherwise.

// Example 1:
// Input: s = "anagram", t = "nagaram"
// Output: true

// Example 2:
// Input: s = "rat", t = "car"
// Output: false

// Constraints:
// 1 <= s.length, t.length <= 5 * 104
// s and t consist of lowercase English letters.

// Follow up: What if the inputs contain Unicode characters? How would you adapt your solution to such a case?

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */

const s = 'anagram'
const t = 'nagaram'

var isAnagram = function (s, t) {
  // convert to arr, sort, and compare

  if (s.length != t.length) return false

  const newS = s.split('').sort().join('')
  const newT = t.split('').sort().join('')
  return newS === newT
}

console.log(isAnagram(s, t))
