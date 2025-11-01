// Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. It is guaranteed there is at least one word that is not banned, and that the answer is unique.

// The words in paragraph are case-insensitive and the answer should be returned in lowercase.

// Note that words can not contain punctuation symbols.

// Example 1:

// Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
// Output: "ball"
// Explanation:
// "hit" occurs 3 times, but it is a banned word.
// "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph.
// Note that words in the paragraph are not case sensitive, that punctuation is ignored (even if adjacent to words, such as "ball,"), and that "hit" isn't the answer even though it occurs more because it is banned.

// Example 2:
// Input: paragraph = "a.", banned = []
// Output: "a"

// Constraints:

// 1 <= paragraph.length <= 1000
// paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
// 0 <= banned.length <= 100
// 1 <= banned[i].length <= 10
// banned[i] consists of only lowercase English letters.

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */

// output = 'ball'
const paragraph = 'Bob hit a ball, the hit BALL flew far after it was hit.'

const banned = ['hit']

var mostCommonWord = function (paragraph, banned) {
  // Step 1: clean text
  const words = paragraph
    .toLowerCase() // 'Bob hit a ball, the hit BALL flew far after it was hit.' --> 'bob hit a ball, the hit ball flew far after it was hit.'
    .replace(/[^a-z\s]/g, ' ') // remove punctuation --> 'bob hit a ball  the hit ball flew far after it was hit '
    .split(' ') // split into words --> ['bob', 'hit', 'a', 'ball', '', 'the', 'hit', 'ball', 'flew', 'far', 'after', 'it', 'was', 'hit', '']
    .filter(Boolean) // removes empty strings --> ['bob', 'hit', 'a', 'ball', 'the', 'hit', 'ball', 'flew', 'far', 'after', 'it', 'was', 'hit']

  // Step 2: handle banned words
  const bannedSet = new Set(banned) // {'hit'}

  // Step 3: count non-banned words
  const count = {} // {}

  for (let word of words) {
    if (!bannedSet.has(word)) {
      count[word] = (count[word] || 0) + 1
    }
  }
  // count = {'bob': 1, 'a': 1, 'ball': 2, 'the': 1, 'flew': 1, 'far': 1, 'after': 1, 'it': 1, 'was': 1}

  // Step 4: find word with max count
  let maxKey = ''
  let maxVal = 0

  for (let key in count) {
    if (count[key] > maxVal) {
      maxVal = count[key]
      maxKey = key
    }
  }

  // if (count['bob'] > 0) {
  //   maxVal = 1
  //   maxKey = 'bob'
  // }
  // if (count['a'] > 1) {
  //   maxVal = 1
  //   maxKey = 'a'
  // }
  // if (count['ball'] > 1) {
  //   maxVal = 2
  //   maxKey = 'ball'
  // }
  // if (count['the'] > 2) {
  //   does not get here since 1 > 2 is false
  // }
  // ...etc


  return maxKey
}


console.log(mostCommonWord(paragraph, banned))
