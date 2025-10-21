// Given an integer array nums, move all 0's to the end of it while maintaining the relative order of the non-zero elements.

// Note that you must do this in-place without making a copy of the array.

// Example 1:

// Input: nums = [0,1,0,3,12]
// Output: [1,3,12,0,0]
// Example 2:

// Input: nums = [0]
// Output: [0]

// Constraints:

// 1 <= nums.length <= 104
// -231 <= nums[i] <= 231 - 1

// Follow up: Could you minimize the total number of operations done?

/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

const nums = [0, 1, 0, 3, 12]
var moveZeroes = function (nums) {
  // const filteredArr = nums.filter((x) => x !== 0)

  // // check how many were 0s
  // const zeroCount = nums.length - filteredArr.length

  // for (let j = 0; j < zeroCount; j++) {
  //   filteredArr.push(0)
  //   // console.log(filteredArr)
  // }
  // return filteredArr
  // ================================================================================
  // Above doesnt work ==> needs to be in place. (no new arr returned)

  // ================================================================================
  // const filteredArr = nums.filter((x) => x !== 0)

  // const zeroCount = nums.length - filteredArr.length

  // nums = filteredArr

  // for (let j = 0; j < zeroCount; j++) {
  //   nums.push(0)
  // }
  // return nums

  const filteredArr = nums.filter((x) => x !== 0)

  for (let i = 0; i < filteredArr.length; i++) {
    nums[i] = filteredArr[i]
  }

  for (let j = filteredArr.length; j < nums.length; j++) {
    nums[j] = 0
  }
}

console.log(moveZeroes(nums))
