/**
  You are given the heads of two sorted linked lists list1 and list2.
  Merge the two lists into one sorted list. The list should be made by splicing together the nodes of the first two lists.
  Return the head of the merged linked list.

  Example 1:
  Input: list1 = [1,2,4], list2 = [1,3,4]
  Output: [1,1,2,3,4,4]

  Example 2:
  Input: list1 = [], list2 = []
  Output: []

  Example 3:
  Input: list1 = [], list2 = [0]
  Output: [0]

  Constraints:
  The number of nodes in both lists is in the range [0, 50].
  -100 <= Node.val <= 100
  Both list1 and list2 are sorted in non-decreasing order.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */

// Definition for singly-linked list.
function ListNode(val, next) {
  this.val = val === undefined ? 0 : val
  this.next = next === undefined ? null : next
}

const list1 = [1, 2, 4]
const list2 = [1, 3, 4]

var mergeTwoLists = function (list1, list2) {
  let dummy = new ListNode(-1)
  let current = dummy

  while (list1 !== null && list2 !== null) {
    // if 1 < 1
    if (list1.val < list2.val) {
      current.next = list1
      list1 = list1.next
    } else {
      current.next = list2
      // current.next = [1 ,3 ,4]

      list2 = list2.next
      // list2 = list2.next = [3, 4]
    }
    current = current.next
    // -1 -> 1 
  }

  // first loop in while:
  // if 1 < 1 false
  // go to else:
  // current.next = list2 = [1, 3, 4]
  // list2 = list2.next = [3, 4]
  // current = current.next = 1

  //2nd loop:
  // if 1 < 3 true
  // current.next = list1 = [1, 2, 4]
  // list1 = list1.next = [2, 4]
  // current = current.next = 1

  // 3rd loop:
  // if 2 < 3 true
  // current.next = list1 = [4]
  // list1 = list1.next = [4]
  // current = current.next = [4]

  if (list1 !== null) current.next = list1
  if (list2 !== null) current.next = list2

  return dummy.next
}

mergeTwoLists(list1, list2)
