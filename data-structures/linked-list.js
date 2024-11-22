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

function Student(name, roll) {
    this.name = name;
    this.roll = roll;
}

console.log(new Student("Abid", "01"));

function LinkedList(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

let a1 = new LinkedList(100, undefined);
let a2 = new LinkedList(200, a1);
let a3 = new LinkedList(500, a2);

console.log(a3);

console.log(new LinkedList(100, undefined));

let x = {
    val : 100,
    next : undefined
}

console.log(x);

// a3 => a2 => a1

let curr = a3;

while (curr !== null) {
    console.log("curr node:", curr);
    curr = curr.next;
}