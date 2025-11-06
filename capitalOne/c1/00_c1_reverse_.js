/**
  Problem: Reverse Inner Characters if Word Starts and Ends with a Vowel 

  Description:
  Given an array of strings words, transform each word as follows:

  If both the first and last characters of the word are vowels,
  keep the first and last characters the same, but reverse all the characters in between.

  Otherwise, leave the word unchanged.

  Return the array of transformed words.


  Example 1
  Input:
  words = ["apple", "orange", "pear", "area", "ice"]


  Output:
  ["apple", "oegnra", "pear", "aea", "ice"]

  Explanation:

  "apple" → starts and ends with vowels 'a' and 'e' → inner "ppl" reversed → "apple" (same when reversed)

  "orange" → starts 'o', ends 'e' → "rang" reversed → "oegnra"

  "pear" → ends with consonant 'r' → unchanged

  "area" → starts 'a', ends 'a' → inner "re" → "ae" reversed → "aea"

  "ice" → starts 'i', ends 'e' → inner "c" → unchanged "ice"
*/

const words = ['apple', 'orange', 'pear', 'area', 'ice']
const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U']

var reverseVowelWords = function (words) {
  let ans = []
  for (word of words) {
    // split word into arr
    let split = word.split('')

    // check if the first and last characters are both vowels
    if (vowels.includes(word[0]) && vowels.includes(word[word.length - 1])) {
      // drop the first char and save it to 'first'
      const first = split.shift()
      // drop the last char and save it to 'last'
      const last = split.pop()
      // reverse the remaining chars
      const middle = split.reverse()

      // add back the first char
      middle.unshift(first)
      // add back the last char
      middle.push(last)

      // add it to the ans arr after making it back into a string
      ans.push(middle.join(''))

    }
    else { ans.push(word)}
  }
  return ans
}

reverseVowelWords(words)
