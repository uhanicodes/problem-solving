var findDiagonalOrder = function(mat) {
    let diagonalElements = [];    
    
    for (let i = 0; i < mat.length; i++) {
        //console.log('i =',i);
        if (i < mat[i].length) {
            
            for (let j = 0; j < Math.min(i + 1, mat[i].length); j++) {
                
                if (i % 2 == 0) {
                    //console.log(i-j, j);
                    diagonalElements.push(mat[i-j][j]);                
                }
                else {
                    //console.log(j, i-j);
                    diagonalElements.push(mat[j][i-j]);
                }
            }
        }           
    }

    console.log(diagonalElements);

    for (let i = mat.length - 1; i > 0; i--) {
        console.log('i =',i);

        for (let j = 0; j < i; j++) {
            
            if (i % 2 == 0) {
                // console.log((mat.length - i + j), (mat.length - 1 - j));
                diagonalElements.push(mat[mat.length - i + j][mat.length - 1 - j]);                
            }
            else {
                // console.log((mat.length - 1 - j), (mat.length - i + j));
                diagonalElements.push(mat[mat.length - 1 - j][mat.length - i + j]);
            }
        }       
    }

      return diagonalElements;
};

// console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

// console.log(findDiagonalOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));

// console.log(findDiagonalOrder([[1,2],[3,4]]));

// console.log(findDiagonalOrder([[3]]));

console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]));