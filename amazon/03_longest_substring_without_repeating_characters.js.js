// Given a string s, find the length of the longest substring without duplicate characters.

// Example 1:

// Input: s = "abcabcbb"
// Output: 3
// Explanation: The answer is "abc", with the length of 3. Note that "bca" and "cab" are also correct answers.
// Example 2:

// Input: s = "bbbbb"
// Output: 1
// Explanation: The answer is "b", with the length of 1.
// Example 3:

// Input: s = "pwwkew"
// Output: 3
// Explanation: The answer is "wke", with the length of 3.
// Notice that the answer must be a substring, "pwke" is a subsequence and not a substring.

// Constraints:

// 0 <= s.length <= 5 * 104
// s consists of English letters, digits, symbols and spaces.

/**
 * @param {string} s
 * @return {number}
 */

const s = 'pwwkew'

var lengthOfLongestSubstring = function (s) {
  let maxLen = 0

    for (let i = 0; i < s.length; i++) {
      const seen = new Set()
      for (let j = i; j < s.length; j++) {
        const char = s[j]
        if (seen.has(char)) break
        seen.add(char)
        maxLen = Math.max(maxLen, seen.size)
      }
    }

 
  return maxLen
}

console.log(lengthOfLongestSubstring(s))
