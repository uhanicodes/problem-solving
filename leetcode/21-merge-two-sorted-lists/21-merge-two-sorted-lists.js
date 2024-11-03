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

var mergeTwoLists = function(list1, list2) {
    
    let l = 0;
    let r = 0;
    let res = [];
    
    for (let i = 0; i < list1.length + list2.length; i++) {
        
        if (list1[l] <= list2[r]) {
            res.push(list1[l]);
            l++;
        }
        else {
            res.push(list2[r]);
            r++;
        }      
    }  

    return res;
}

console.log(mergeTwoLists([2, 3, 5], [2, 3, 4]));