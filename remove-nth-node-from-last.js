/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if(head == null) {
        return null;
    }

    let fast = head;
    let slow = head;

    for(let i = 0; i < n; i++) {
        fast = fast.next;
    }

    let prev = null;

    while(fast != null) {
        prev = slow;
        slow = slow.next;
        fast = fast.next;
    }

    if(prev == null) { // first element
        return head.next;
    }

    prev.next = slow.next;
    return head;
};