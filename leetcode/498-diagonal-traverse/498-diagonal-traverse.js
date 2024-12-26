var findDiagonalOrder = function(mat) {
    let diagonalElements = [];    
    
    for (let i = 0; i < mat.length; i++) {

        for (let j = 0; j < i+1; j++) {
            //console.log(j);

            if (i % 2 == 0) {
                diagonalElements.push(mat[i][i-i]);
            }
            else {
                diagonalElements.push(mat[i-i][i]);
            }
        }
    }

    return diagonalElements;
};

console.log(findDiagonalOrder([1, 2, 3], [4, 5, 6], [7, 8, 9]));