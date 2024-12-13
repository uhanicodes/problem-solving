var semiOrderedPermutation = function(nums) {
    let swap1 = 0;
    let swap2 = 0;
    let swap = 0;
    let n = nums.length;

    if (n == 1) {
        return swap;
    }

    for (let i = 0; i < n; i++) {
        
        if(nums[i] == 1) {
            swap1 = i;
            swap = swap + swap1;
        }

        if(nums[i] == n) {
            swap2 = n - 1 - i;
            swap = swap + swap2;
        }
    }
    return swap;    
};

console.log(semiOrderedPermutation([2, 3, 1, 4]))