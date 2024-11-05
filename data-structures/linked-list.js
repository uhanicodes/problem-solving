function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

let n1 = new ListNode(10, undefined);
let n2 = new ListNode(15, n1);
let n3 = new ListNode(12, n2);

console.log(n3);

let current = n3;

while (current != null) {
    console.log(current.val);
    current = current.next;
}