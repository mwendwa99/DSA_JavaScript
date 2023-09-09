// https://leetcode.com/problems/delete-node-in-a-linked-list/

var deleteNode = function(node) {
    let temp = node.next.next
    node.val = node.next.val
    node.next = temp
    // also it can be as follows, is same
    // node.val = node.next.val
    // node.next = node.next.next
    };


function deleteNode(node) {
    // Check if the given node is not the last node in the list.
    if (node === null || node.next === null) {
        return;
    }

    // Copy the value of the next node into the current node.
    node.val = node.next.val;

    // Update the next pointer of the current node to skip the next node.
    node.next = node.next.next;
}