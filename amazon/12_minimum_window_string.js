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
  if (t.length > s.length) return ''

  // Step 1️⃣: build frequency map for string t
  const needCount = {}
  for (let c of t) {
    needCount[c] = (needCount[c] || 0) + 1
  }
  const needKinds = Object.keys(needCount).length

  // Step 2️⃣: setup sliding window variables
  const windowCount = {} // keeps track of what's inside the window
  let haveKinds = 0 // how many kinds we’ve satisfied so far
  let left = 0 // left pointer
  let minLen = Infinity // track best (smallest) window length
  let res = '' // final substring result

  // Step 3️⃣: expand the window with right pointer
  for (let right = 0; right < s.length; right++) {
    const char = s[right]

    // add char to window count
    windowCount[char] = (windowCount[char] || 0) + 1

    // ✅ check if this char just satisfied its needed amount
    if (needCount[char] && windowCount[char] === needCount[char]) {
      haveKinds++
    }

    // 🧠 now we’ll later shrink the window only when valid
    // but for now, let's log to see what we have:
    console.log({
      right,
      char,
      windowCount,
      haveKinds,
      needKinds,
    })
  }

  // placeholder return so it runs without error
  return res
}

console.log(minWindow(s, t))
