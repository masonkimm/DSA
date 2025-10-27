// Given two strings s and t of lengths m and n respectively, return the minimum window substring of s such that every character in t (including duplicates) is included in the window. If there is no such substring, return the empty string "".

// The testcases will be generated such that the answer is unique.

// Example 1:

// Input: s = "ADOBECODEBANC", t = "ABC"
// Output: "BANC"
// Explanation: The minimum window substring "BANC" includes 'A', 'B', and 'C' from string t.
// Example 2:

// Input: s = "a", t = "a"
// Output: "a"
// Explanation: The entire string s is the minimum window.
// Example 3:

// Input: s = "a", t = "aa"
// Output: ""
// Explanation: Both 'a's from t must be included in the window.
// Since the largest window of s only has one 'a', return empty string.

// Constraints:

// m == s.length
// n == t.length
// 1 <= m, n <= 105
// s and t consist of uppercase and lowercase English letters.

// Follow up: Could you find an algorithm that runs in O(m + n) time?

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */

// const s = 'a'
// const t = 'aa'
const s = 'ADOBECODEBANC'
const t = 'ABC'

var minWindow = function (s, t) {
  if (t.length > s.length) return ""

  // Step 1: frequency map for t
  const need = {}
  for (let c of t) need[c] = (need[c] || 0) + 1
  let needCount = Object.keys(need).length

  // Step 2: sliding window
  let left = 0
  let minLen = Infinity
  let start = 0
  const window = {}

  for (let right = 0; right < s.length; right++) {
    const c = s[right]
    window[c] = (window[c] || 0) + 1

    if (need[c] && window[c] === need[c]) needCount--

    // Step 3: shrink when valid
    while (needCount === 0) {
      if (right - left + 1 < minLen) {
        minLen = right - left + 1
        start = left
      }

      const leftChar = s[left]
      window[leftChar]--
      if (need[leftChar] && window[leftChar] < need[leftChar]) {
        needCount++
      }
      left++
    }
  }

  return minLen === Infinity ? "" : s.slice(start, start + minLen)
}


console.log(minWindow(s, t))
