let x = [1, 2, 4];
let y = [1, 2, 3];

// [3, 4, 5]
// [4, 5, 6]
// [3, 4, 4, 5, 5, 6]

// l = 0, r = 0, [3]
// l = 1, r = 0, [3, 4]
// l = 2, r = 0, [3, 4, 4]
// l = 2, r = 1, [3, 4, 4, 5]
// l = 3, r = 1, [3, 4, 4, 5, 5]
// l = 3, r = 2, [3, 4, 4, 5, 5, 6]
// l = 3, r = 3
 
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}

var mergeTwoLists = function(list1, list2) {
    
    let l = list1;
    let r = list2;
    let res = new ListNode(-1000, undefined);
    let head = res;
    
    while (l !== null && r !== null) {
        
        if (l == null) {
            res.next = new ListNode(r.val, undefined);
            res = res.next;
            r = r.next;
            continue;
        }
        
        if (r == null) {
            res.next = new ListNode(l.val, undefined);
            res = res.next;
            l = l.next;
            continue;
        }

        if (l.val <= r.val) {
            res.next = new ListNode(l.val, undefined);
            res = res.next;
            l = l.next;
        }
        else {
            res.next = new ListNode(r.val, undefined);
            res = res.next;
            r = r.next;
        }

        console.log(l, r);
    }  
    
    return head;
}

console.log(mergeTwoLists([2, 3, 5], [2, 3, 4]));

console.log(mergeTwoLists([], []));

console.log(mergeTwoLists([], [5]));