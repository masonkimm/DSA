// You are given an array of logs. Each log is a space-delimited string of words, where the first word is the identifier.

// There are two types of logs:

// Letter-logs: All words (except the identifier) consist of lowercase English letters.
// Digit-logs: All words (except the identifier) consist of digits.

// Reorder these logs so that:
// The letter-logs come before all digit-logs.
// The letter-logs are sorted lexicographically by their contents. If their contents are the same, then sort them lexicographically by their identifiers.
// The digit-logs maintain their relative ordering.
// Return the final order of the logs.

// Example 1:

// Input: logs = ["dig1 8 1 5 1","let1 art can","dig2 3 6","let2 own kit dig","let3 art zero"]
// Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
// Explanation:
// The letter-log contents are all different, so their ordering is "art can", "art zero", "own kit dig".
// The digit-logs have a relative order of "dig1 8 1 5 1", "dig2 3 6".
// Example 2:

// Input: logs = ["a1 9 2 3 1","g1 act car","zo4 4 7","ab1 off key dog","a8 act zoo"]
// Output: ["g1 act car","a8 act zoo","ab1 off key dog","a1 9 2 3 1","zo4 4 7"]

// Constraints:

// 1 <= logs.length <= 100
// 3 <= logs[i].length <= 100
// All the tokens of logs[i] are separated by a single space.
// logs[i] is guaranteed to have an identifier and at least one word after the identifier.

/**
 * @param {string[]} logs
 * @return {string[]}
 */

const logs = [
  'dig1 8 1 5 1',
  'let1 art can',
  'dig2 3 6',
  'let2 own kit dig',
  'let3 art zero',
]
// Output: ["let1 art can","let3 art zero","let2 own kit dig","dig1 8 1 5 1","dig2 3 6"]
// var reorderLogFiles = function(logs) {
//   return logs.sort((a, b) => {
//     const [idA, ...restA] = a.split(' ')
//     const [idB, ...restB] = b.split(' ')
//     const isDigitA = /\d/.test(restA[0])
//     const isDigitB = /\d/.test(restB[0])

//     // 1️⃣ both are letter logs → sort by content then by identifier
//     if (!isDigitA && !isDigitB) {
//       const contentA = restA.join(' ')
//       const contentB = restB.join(' ')
//       if (contentA === contentB) return idA.localeCompare(idB)
//       return contentA.localeCompare(contentB)
//     }

//     // 2️⃣ one is letter, one is digit → letter first
//     if (!isDigitA && isDigitB) return -1
//     if (isDigitA && !isDigitB) return 1

//     // 3️⃣ both are digit logs → keep original order
//     return 0
//   })
// }

// var reorderLogFiles = function(logs) {
//   let letterLogs = []
//   let digitLogs = []

//   // Step 1️⃣: separate letter logs and digit logs
//   for (let log of logs) {
//     const parts = log.split(' ')
//     const id = parts[0]
//     const content = parts.slice(1).join(' ')

//     if (isNaN(content[0])) {
//       // letter log
//       letterLogs.push([id, content])
//     } else {
//       // digit log
//       digitLogs.push(log)
//     }
//   }

//   // Step 2️⃣: sort letter logs by content, then by identifier
//   letterLogs.sort((a, b) => {
//     const [idA, contentA] = a
//     const [idB, contentB] = b

//     if (contentA < contentB) return -1
//     if (contentA > contentB) return 1
//     // if contents are the same, compare identifiers
//     return idA < idB ? -1 : idA > idB ? 1 : 0
//   })

//   // Step 3️⃣: rebuild letter logs to original string format
//   const sortedLetters = letterLogs.map(([id, content]) => `${id} ${content}`)

//   // Step 4️⃣: combine sorted letter logs + digit logs (keep digit order)
//   return [...sortedLetters, ...digitLogs]
// }

var reorderLogFiles = function (logs) {
  let letterLogs = []
  let digitLogs = []

  // Step 1️⃣: separate letter logs and digit logs
  for (let log of logs) {
    // splits string into array of words
    const parts = log.split(' ')
    // gets identifier for letter or digit logs
    const id = parts[0]
    // gets content for letter or digit logs without identifier
    const content = parts.slice(1).join(' ')

    // checks if first char in content is NaN (not a number)
    if (isNaN(content[0])) {
      // letter log
      letterLogs.push([id, content])

      // letterLogs = [
      //   ["let1", "art can"],
      //   ["let2", "own kit dig"],
      //   ["let3", "art zero"]
      // ]
    } else {
      // digit log
      digitLogs.push(log)
      // digitLogs = ["dig1 8 1 5 1","dig2 3 6"]
    }
  }

  // Step 2️⃣: sort letter logs by content, then by identifier
  letterLogs.sort((a, b) => {
    const [idA, contentA] = a
    const [idB, contentB] = b

    /**
     * idA = "let1"      contentA = "art can"
     * idB = "let2"      contentB = "own kit dig"
     */

    if (contentA < contentB) return -1
    if (contentA > contentB) return 1
    // if contents are the same, compare identifiers
    return idA < idB ? -1 : idA > idB ? 1 : 0
  })

  // Step 3️⃣: rebuild letter logs to original string format
  const sortedLetters = letterLogs.map(([id, content]) => `${id} ${content}`)

  // Step 4️⃣: combine sorted letter logs + digit logs (keep digit order)
  return [...sortedLetters, ...digitLogs]
}


console.log(reorderLogFiles(logs))