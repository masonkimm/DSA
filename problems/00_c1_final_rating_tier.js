/**
 You are participating in a competitive platform where your rating changes after each contest.
  You start with an integer initialRating and are given an array changes,
  where each changes[i] represents the change in rating (it can be positive or negative) after the i-th contest.

  Your task is to determine your final tier after applying all rating changes.

  The rating tiers are defined as follows:

  Rating Range	Tier
  < 1000	"Beginner"
  1000 ≤ rating < 1500	"Intermediate"
  1500 ≤ rating < 2000	"Advanced"
  2000 ≤ rating ≤ 2500	"Pro"

  Return the final tier as a string.


  initialRating = 950
  changes = [100, 150, -50, 200]
  Output:

  arduino
  Copy code
  "Intermediate"
  Explanation:

  yaml
  Copy code
  950 → 1050 → 1200 → 1150 → 1350
  Final rating = 1350 → Tier = "Intermediate"
 */

const initialRating = 950
const changes = [100, 150, -50, 200]

const finalRatingTier = (initial, changes) => {
  let ans = initial

  // add each values to the ans
  for (let i = 0; i < changes.length; i++) {
    ans += changes[i]
  }

  console.log('Final Rating:', ans)

  // check ans against tiers and return tier
  if (ans < 1000) return 'Beginner'
  else if (ans < 1500) return 'Intermediate'
  else if (ans < 2000) return 'Advanced'
  else return 'Pro'
}

console.log(finalRatingTier(initialRating, changes))
