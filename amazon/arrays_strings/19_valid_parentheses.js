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

const stack = '[]'

var isValid = function (s) {
  /**
   * use a stack to keep track of opening brackets
   * when encounter a closing bracket, pop the last opening bracket from the stack and check if it matches
   * if it doesnt match, return false
   * at the end, if the stack is empty, return true
   */
  const stack = []

  for (let char of s) {
    console.log(char)
    if (map[char]) { // if map has key: [ /// 2nd loop: ] --> go to else
      // push push the value of key('[') into the stack (']')
      stack.push(map[char])
      // stack = [']']
      console.log(stack)
    } else { //if it doesnt have (
      // then check if the last value does not equal char (']')
      if (stack.pop() !== char) return false
      // (if '] !== ']') return false /// but ] =]

      // by stack will be empty from the pop
    }
  }
  return stack.length === 0 // return true
}

console.log(isValid(stack))
