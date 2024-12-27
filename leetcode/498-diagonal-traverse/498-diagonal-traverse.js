var findDiagonalOrder = function(mat) {
    let diagonalElements = [];    
    
    for (let i = 0; i < mat.length; i++) {
        console.log('i =',i);

        for (let j = 0; j < i+1; j++) {
            
            if (i % 2 == 0) {
                //console.log(i-j, j);
                diagonalElements.push(mat[i-j][j]);                
            }
            else {
                //console.log(j, i-j);
                diagonalElements.push(mat[j][i-j]);
            }
        }

        for (let k = mat.length - (i + 1); k > 0; k--) {
            
            if ((mat.length - k) % 2) {
                console.log(k, (mat.length - k));
            }
            else {
                console.log((mat.length - k), k);
            }
        }
    }

    return diagonalElements;
};

//console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

console.log(findDiagonalOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));