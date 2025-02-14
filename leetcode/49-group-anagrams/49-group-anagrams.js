var groupAnagrams = function(strs) {
   let carCount = new Map();

   for (let i = 0; i < strs.length; i++) {

        for (let j = 0; j < strs[i].length; j++) {

            if (carCount.get(strs[i][j]) == undefined) {
                carCount.set(strs[i][j], 1);
            }
            else {
                carCount.set(strs[i][j], carCount.get(strs[i][j]) + 1);
            }
        }
   }

   return carCount;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))