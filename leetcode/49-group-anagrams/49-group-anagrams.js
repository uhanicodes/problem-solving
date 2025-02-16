var groupAnagrams = function(strs) {
   let sortStrs = [];
   let anagrams = [];

   for (let i = 0; i < strs.length; i++) {
        sortStrs[i] = strs[i].split('').sort().join('');
   }

   for (let i = 0; i < sortStrs.length; i++) {
      let x = [strs[i]];

      for (let j = i + 1; j <sortStrs.length; j++) {

         if (sortStrs[i] == sortStrs[j]) {
            x.push(strs[j]);
            delete strs[j];
         }
         else {
            continue;
         }
      }

      anagrams.push(x);
      delete strs[i];
      x = [];

   }

   return anagrams;
};

console.log(groupAnagrams(["eat","tea","tan","ate","nat","bat"]))