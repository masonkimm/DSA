// Problem 3 — Remove Duplicates from Sorted Array

// Given a sorted array nums, remove the duplicates in place so that each element appears only once.
// Return the new length of the array (the first part of nums up to that length should contain the unique values).

// Example 1
// Input:  nums = [1, 1, 2]
// Output: 2
// // nums becomes [1, 2, _]

// Example 2
// Input:  nums = [0,0,1,1,1,2,2,3,3,4]
// Output: 5
// // nums becomes [0,1,2,3,4,_,_,_,_,_]

const input = [1, 1, 2]

const remove_dupe = (nums) => {
  let slow = 0

  for (let fast = 1; fast < nums.length; fast++) {
    // check each element with prev unique one
    if (nums[fast] !== nums[slow]) {
      slow++
      nums[slow] = nums[fast]
    }
  }
  return slow + 1
}

console.log(remove_dupe(input))
