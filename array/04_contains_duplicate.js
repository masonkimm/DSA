// Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

// Example 1:

// Input: nums = [1,2,3,1]

// Output: true

// Explanation:

// The element 1 occurs at the indices 0 and 3.

// Example 2:

// Input: nums = [1,2,3,4]

// Output: false

// Explanation:

// All elements are distinct.

// Example 3:

// Input: nums = [1,1,1,3,3,4,3,2,4,2]

// Output: true

 

// Constraints:

// 1 <= nums.length <= 105
// -109 <= nums[i] <= 109


// Find duplicate number
/**
 * @param {number[]} nums
 * @return {boolean}
 */

const numsArr = [1, 2, 3, 4, 1]

const hi = (nums) => {
  const h = new Set(nums)
  return nums.length !== h.size
}
console.log(hi(numsArr))






var findDuplicateNum = function (nums) {

  // check the size(lengt) of the new Set vs original size
  // if different? then there was a duplicate
  const uniqueSet = new Set(nums)

  for (let num of nums) {
    if (uniqueSet.has(nums)){
      return num
    }
  }
}

// console.log(findDuplicateNum(numsArr))
// containsDuplicate(nums)

