var semiOrderedPermutation = function(nums) {
    let swap = 0;
    let n = nums.length;

    if (n == 1) {
        return swap;
    }

    for (let i = 0; i < n; i++) {
        
        if (nums[i] == 1) {
            swap += i;
        }

        if (nums[i] == n) {
            swap += n - 1 - i;
        }
    }
    
    return swap;    
};

console.log(semiOrderedPermutation([2, 4, 1, 3]))