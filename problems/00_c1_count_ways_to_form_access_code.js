/**
  Problem: Count Ways to Form the Access Code

  Description:
  You are given an array of strings codes, where each string represents a possible access code fragment.
  You need to determine how many possible combinations of these fragments can form a final access code.

  Each code fragment can be used once per combination, and the order of concatenation matters.

  Example 1

  Input:
  codes = ["1", "212", "12", "12"]
  target = "1212"

  Output:
  2

  Explanation:
  We can form "1212" in 2 ways:
  "12" + "12" → "1212"
  "1" + "212" → "1212"

  No other combination equals "1212".
 */

const codes = [1, 212, 12, 12]
const target = 1212

function countWaysToFormAccessCode(codes, target) {
  const newCodes = codes.map(String)
  const newTarget = target.toString()
  let count = 0

  for (let i = 0; i < newCodes.length; i++) {
    for (let j = 0; j < newCodes.length; j++) {
      if (i === j) continue // can't use same fragment twice

      if (newCodes[i] + newCodes[j] === newTarget) {
        console.log(`Match: ${newCodes[i]} + ${newCodes[j]} (i=${i}, j=${j})`)
        count++
      }
    }
  }

  console.log('Total ways:', count)
  return count
}



countWaysToFormAccessCode(codes, target)

console.log(countWaysToFormAccessCode(codes, target))
