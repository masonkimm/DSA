/**
 * Given an m x n 2D binary grid grid which represents a map of '1's (land) and '0's (water), return the number of islands.

An island is surrounded by water and is formed by connecting adjacent lands horizontally or vertically. You may assume all four edges of the grid are all surrounded by water.

 

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
Example 2:

Input: grid = [
  ["1","1","0","0","0"],
  ["1","1","0","0","0"],
  ["0","0","1","0","0"],
  ["0","0","0","1","1"]
]
Output: 3
 

Constraints:

m == grid.length
n == grid[i].length
1 <= m, n <= 300
grid[i][j] is '0' or '1'.
 */

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
  if (!grid || grid.length === 0) return 0

  let count = 0
  const rows = grid.length
  const cols = grid[0].length

  const dfs = (r, c) => {
    // Base case: out of bounds or water
    if (r < 0 || c < 0 || r >= rows || c >= cols || grid[r][c] === '0') {
      return
    }

    // Mark as visited
    grid[r][c] = '0'

    // Explore all 4 directions
    dfs(r + 1, c) // down
    dfs(r - 1, c) // up
    dfs(r, c + 1) // right
    dfs(r, c - 1) // left
  }

  // Loop through every cell
  for (let r = 0; r < rows; r++) {
    for (let c = 0; c < cols; c++) {
      if (grid[r][c] === '1') {
        count++
        dfs(r, c) // sink the island
      }
    }
  }

  return count
}
