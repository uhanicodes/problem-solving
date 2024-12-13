var semiOrderedPermutation = function(nums) {
    let swap1 = 0;
    let swap2 = 0;
    let swap = swap1 + swap2;
    let n = nums.length;

    for (let i = 0; i < n; i++) {
        
        if(nums[i] == 1) {
            swap1 = i;
        }

        if(nums[i] == n) {
            swap2 = n - 1 - i;
        }
    }
    return swap;    
};

console.log(semiOrderedPermutation([2,1,4,3]))