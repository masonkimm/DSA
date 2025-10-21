// Problem 1 — Sum of two numbers equals target (sorted array)

// Given a sorted array of integers and a target value,
// return the indices (1-based) of the two numbers that add up to the target.

// Example:

// Input: numbers = [2, 7, 11, 15], target = 9
// Output: [1, 2]

// Hint:
// Use two pointers:
// left = 0, right = numbers.length - 1
// If sum < target → move left++
// If sum > target → move right--

const arr = [2, 7, 11, 15]
const target = 9

const sorted_two_sum = (arr, target) => {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let sum = arr[left] + arr[right]
    // sum: 2 + 15 = 17
    if (sum === target) {
      return [left +1, right +1]
    }
    else if (sum > target) {
      right--
    }
    else {
      left++
    }
  }
}

console.log(sorted_two_sum(arr, target))


