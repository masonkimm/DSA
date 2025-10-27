// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]
// Explanation:
// nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
// nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
// nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
// The distinct triplets are [-1,0,1] and [-1,-1,2].
// Notice that the order of the output and the order of the triplets does not matter.
// Example 2:

// Input: nums = [0,1,1]
// Output: []
// Explanation: The only possible triplet does not sum up to 0.
// Example 3:

// Input: nums = [0,0,0]
// Output: [[0,0,0]]
// Explanation: The only possible triplet sums up to 0.

// Constraints:

// 3 <= nums.length <= 3000
// -105 <= nums[i] <= 105

/**
 * @param {number[]} nums
 * @return {number[][]}
 */

// const nums = [0, 1, -1]
const nums = [-1, 0, 1, 2, -1, -4]

// var threeSum = function (nums) {
//   let ans = []

//   nums.sort((a, b) => a - b)

//   for (let i = 0; i < nums.length; i++) {
//     if (i > 0 && nums[i] === nums[i-1]) continue

//     for (let j = i + 1; j < nums.length; j++) {
//       if (j > i +1 && nums[j] === nums[j-1]) continue

//       for (let k = j + 1; k < nums.length; k++) {
//         if (nums[i] + nums[j] + nums[k] == 0 && i != j && i != k && j != k) {
//           ans.push([nums[i], nums[j], nums[k]])
//         }
//       }
//     }
//   }
//   return ans
// }

// var threeSum = function (nums) {
//   let ans = []

//   nums.sort((a, b) => a - b)

//   for (let i = 0; i < nums.length; i++) {
//     if (i > 0 && nums[i] === nums[i - 1]) continue // skip duplicate i

//     let left = i + 1
//     let right = nums.length - 1

//     while (left < right) {
//       let sum = nums[i] + nums[left] + nums[right]

//       if (sum === 0) {
//         ans.push([nums[i], nums[left], nums[right]])
//         // skip duplicates
//         while (left < right && nums[left] === nums[left + 1]) left++
//         while (left < right && nums[right] === nums[right - 1]) right--

//         left++
//         right--
//       } else if (sum < 0) {
//         left++
//       } else {
//         right--
//       }
//     }
//   }
//   return ans
// }

var threeSum = function (nums) {
  let ans = new Set()

  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length; i++) {
    let left = i + 1
    let right = nums.length - 1

    while (left < right) {
      const sum = nums[i] + nums[left] + nums[right]

      if (sum == 0) {
        ans.add(`${nums[i]}, ${nums[left]}, ${nums[right]}`)
        left++
        right--
      } else if (sum < 0) {
        left++
      } else {
        right--
      }
    }
  }
  return Array.from(ans).map((x) => x.split(',').map(Number))
}

console.log(threeSum(nums))
