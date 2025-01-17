// [ 1,  2,  3]
// [ 4,  5,  6]
// [ 7,  8,  9]
// [10, 11, 12]
// [13, 14, 15]

// [ 1,  2,  3,  4,  5,  6]
// [ 7,  8,  9, 10, 11, 12]
// [13, 14, 15, 16, 17, 18]

var findDiagonalOrder = function(mat) {
    let diagonalElements = [];
    let m = mat.length;
    let n = mat[0].length;

    for (let i = 0; i < m + n - 1; i++) {

        let diagonalLength = Math.min((i + 1), Math.min(m, n)) - Math.max(0, i + 1 - Math.max(m, n));

        for (let j = 0; j < diagonalLength; j++) {
            let x, y;

            if (i % 2 == 0) {
                x = Math.min(i, m - 1) - j;
                y = j + Math.max(0, i - (m - 1));
            }
            else {
                x =  j + Math.max(0, i - (n - 1));
                y = Math.min(i, n - 1) - j;
            }
            
            diagonalElements.push(mat[x][y]);
        }
    }
    
    return diagonalElements;
};

// console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));

// console.log(findDiagonalOrder([[1, 2, 3, 4], [5, 6, 7, 8], [9, 10, 11, 12], [13, 14, 15, 16]]));

console.log(findDiagonalOrder([[1,2],[3,4]]));

console.log(findDiagonalOrder([[3]]));

console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9], [10, 11, 12]]));