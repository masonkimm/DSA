/**
 * @param {number[]} nums
 * @return {number}
 * Given a non-empty array of integers nums, every element appears twice except for one. Find that single one.
 * You must implement a solution with a linear runtime complexity and use only constant extra space.
 */

const numArr = [2, 2, 1]
var singleNumber = function (nums) {
  let result = 0
  for (let num of nums) {
    result ^= num // XOR cancels out pairs
  }
  return result
}

console.log(singleNumber(numArr))
