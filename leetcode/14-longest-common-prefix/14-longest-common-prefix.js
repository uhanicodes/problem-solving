let longestCommonPrefix = (arr) => {
    let commonPrefix = arr[0];

    for (let i = 0; i < arr.length; i++) {

        let prefix = "";

        for (let j = 0; j < arr[i].length; j++) {

            if (arr[i][j] == commonPrefix[j]) {
                prefix = prefix + arr[i][j];
            }
            else {
                break;
            }
        }        

        commonPrefix = prefix;
    }

    return commonPrefix;
}

console.log(longestCommonPrefix(["flower","flow","flight"]));

console.log(longestCommonPrefix(["dog","racecar","car"]));

console.log(longestCommonPrefix(["flower","flow","flight"]));