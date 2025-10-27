// You are given an integer array height of length n. There are n vertical lines drawn such that the two endpoints of the ith line are (i, 0) and (i, height[i]).

// Find two lines that together with the x-axis form a container, such that the container contains the most water.

// Return the maximum amount of water a container can store.

// Notice that you may not slant the container.

 

// Example 1:


// Input: height = [1,8,6,2,5,4,8,3,7]
// Output: 49
// Explanation: The above vertical lines are represented by array [1,8,6,2,5,4,8,3,7]. In this case, the max area of water (blue section) the container can contain is 49.
// Example 2:

// Input: height = [1,1]
// Output: 1
 

// Constraints:

// n == height.length
// 2 <= n <= 105
// 0 <= height[i] <= 104


/**
 * @param {number[]} height
 * @return {number}
 */

const height = [1,8,6,2,5,4,8,3,7]
// output = 49

var maxArea = function(height) {
    let left = 0;
    let right = height.length - 1 // 8
    let maxArea = 0
    
    while (left < right) {
        const width = right - left //8
        const minHeight = Math.min(height[left], height[right]) // (1, 7)
        const area = width * minHeight // 8 * 1
        
        maxArea = Math.max(maxArea, area) // 8

        if (height[left] < height[right]){ //0, 7
            left++
        } else {
            right --
        }
    }

    return maxArea
};

console.log(maxArea(height))





// var maxArea = function(height) {
//     let maxArea = 0
//     for (let i=0; i<height.length; i++){
//         for (let j=1; j< height.length; j++){
//            const area = Math.min(height[i], height[j]) * (j - i)
//            maxArea = Math.max(maxArea, area)
//         }
//     }

//     return maxArea
// };

// console.log(maxArea(height))