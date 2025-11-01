// Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

// Return the sum of the three integers.

// You may assume that each input would have exactly one solution.

// Example 1:

// Input: nums = [-1,2,1,-4], target = 1
// Output: 2
// Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
// Example 2:

// Input: nums = [0,0,0], target = 1
// Output: 0
// Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

// Constraints:

// 3 <= nums.length <= 500
// -1000 <= nums[i] <= 1000
// -104 <= target <= 104

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
const input = [-1, 2, 1, -4]
const target = 1

var threeSumClosest = function (nums, target) {
  nums.sort((a, b) => a - b)

  let closest = nums[0] + nums[1] + nums[2]
  // closest = -1 + 2 + 1 = 2


  for (let i = 0; i < nums.length; i++) {
    let left = i + 1
    let right = nums.length - 1
    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      // first loop: 
      // sum = -1 + 2 + -4 = -3; 
      // closest = 2

      // go to 1st if:
      // sum(-3) - target(1) = -4 && closest(2) - target(1) = 1
      // Math.abs(4) < Math.abs(1) --> go to 2nd if
      // sum(-3) < target (1)
      // left++ 
      // sum = -1 + 1 + -4 = -4

      // abs(4) < abs (1)
      // left++
      // sum = -1 + -4 + -4 = -1
      // abs(1) < target 1

      if (Math.abs(sum - target) < Math.abs(closest - target)){
        closest = sum
      }
      // if sum is too small, need larger sum
      if (sum < target) {
        left++
      }
      // if sum is too large, need smaller sum
      else if (sum > target) {
        right--
      }
      // if it's same, stop early
      else {
        return sum
      }
    }
  }
  return closest
}

console.log(threeSumClosest(input, target))
