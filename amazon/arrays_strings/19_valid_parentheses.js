// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

// Example 5:

// Input: s = "([)]"

// Output: false

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
const map = {
  '(': ')',
  '[': ']',
  '{': '}',
}

const stack = '([])'

var isValid = function (s) {
  const stack = []

  for (let char of s) {
    if (map[char]) {
      stack.push(map[char])
      console.log(stack)
    } else {
      if (stack.pop() !== char) return false
    }
  }
  return stack.length === 0
}

console.log(isValid(stack))
