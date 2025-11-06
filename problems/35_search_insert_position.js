/**
 35. Search Insert Position
  
  Given a sorted array of distinct integers and a target value, return the index if the target is found. If not, return the index where it would be if it were inserted in order.

  You must write an algorithm with O(log n) runtime complexity.


  Example 1:

  Input: nums = [1,3,5,6], target = 5
  Output: 2
  Example 2:

  Input: nums = [1,3,5,6], target = 2
  Output: 1
  Example 3:

  Input: nums = [1,3,5,6], target = 7
  Output: 4
  

  Constraints:

  1 <= nums.length <= 104
  -104 <= nums[i] <= 104
  nums contains distinct values sorted in ascending order.
  -104 <= target <= 104
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
let nums = [1, 3, 5, 6]
// let target= 5
let target = 7
// target = 0

// if target is found, return index
// if not, retun the index of where it would be when inserted

//======== O(n) runtime complexity================
var searchInsert = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === target) return i
    if (target < nums[i]) return i
  }
  return nums.length
}

console.log(searchInsert(nums, target))

//======= O(log n) runtime complexity ===============
var searchInsert2 = function (nums, target) {
  let left = 0
  let right = nums.length - 1

  while (left <= right) {
    const mid = Math.floor((left + right) / 2)

    if (nums[mid] === target) {
      return mid // found exact match
    } else if (nums[mid] < target) {
      left = mid + 1 // search right half
    } else {
      right = mid - 1 // search left half
    }
  }

  // when loop ends, left is the correct insert position
  return left
}

console.log(searchInsert2(nums, target))
