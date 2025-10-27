/**
 Convert a non-negative integer num to its English words representation.

 

Example 1:

Input: num = 123
Output: "One Hundred Twenty Three"
Example 2:

Input: num = 12345
Output: "Twelve Thousand Three Hundred Forty Five"
Example 3:

Input: num = 1234567
Output: "One Million Two Hundred Thirty Four Thousand Five Hundred Sixty Seven"
 

Constraints:

0 <= num <= 231 - 1
 */

/**
 * @param {number} num
 * @return {string}
 */
var numberToWords = function (num) {
  if (num === 0) return 'Zero'

  const below20 = [
    '',
    'One',
    'Two',
    'Three',
    'Four',
    'Five',
    'Six',
    'Seven',
    'Eight',
    'Nine',
    'Ten',
    'Eleven',
    'Twelve',
    'Thirteen',
    'Fourteen',
    'Fifteen',
    'Sixteen',
    'Seventeen',
    'Eighteen',
    'Nineteen',
  ]

  const tens = [
    '',
    '',
    'Twenty',
    'Thirty',
    'Forty',
    'Fifty',
    'Sixty',
    'Seventy',
    'Eighty',
    'Ninety',
  ]

  const thousands = ['', 'Thousand', 'Million', 'Billion']

  function helper(num) {
    if (num === 0) return ''
    else if (num < 20) return below20[num] + ' '
    else if (num < 100)
      return tens[Math.floor(num / 10)] + ' ' + helper(num % 10)
    else return below20[Math.floor(num / 100)] + ' Hundred ' + helper(num % 100)
  }

  let i = 0
  let res = ''

  while (num > 0) {
    if (num % 1000 !== 0) {
      res = helper(num % 1000) + thousands[i] + ' ' + res
    }
    num = Math.floor(num / 1000)
    i++
  }

  return res.trim()
}
