var groupAnagrams = function(strs) {
   let sortStrs = [];

   for (let i = 0; i < strs.length; i++) {
        sortStrs[i] = strs[i].split('').sort().join('');
   }

   return sortStrs;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))