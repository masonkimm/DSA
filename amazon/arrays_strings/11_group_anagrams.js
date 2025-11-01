// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
const input = ['eat', 'tea', 'tan', 'ate', 'nat', 'bat']
// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

var groupAnagrams = function (strs) {
  /**
   * sort the strings to group by the same key
   * check map, create new key group by the sorted value IF it doesnt exist
   * when looping, if the group key exist, push the actual word into the corresponding key group
   */
  
  // create a map to hold the key:value pairs
  const map = new Map()

  for (let word of strs) {
    const sorted = word.split('').sort().join('')
    console.log(sorted)

    if (!map.has(sorted)){
      map.set(sorted, [])
    }
    console.log(map)
    map.get(sorted).push(word)
  }

  return Array.from(map.values())
}

console.log(groupAnagrams(input))
