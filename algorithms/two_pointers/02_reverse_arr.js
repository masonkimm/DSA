// =========================================
// Given an array, reverse it in-place (you can’t use .reverse()).

// Example:

const input = [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

const reverse_arr = (arr) => {
  let left = 0
  let right = arr.length - 1

  while (left < right) {
    let temp = arr[left]

    arr[left] = arr[right]
    arr[right] = temp

    left++
    right--
  }

  return arr
}

console.log(reverse_arr(input))
