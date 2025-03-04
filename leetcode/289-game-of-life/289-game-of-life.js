const dx = [-1, -1, -1,  0, 0,  1, 1, 1];
const dy = [-1,  0,  1, -1, 1, -1, 0, 1];

var gameOfLife = function(board) {
    let newBoard = new Array(board.length);

    for (let i = 0; i < newBoard.length; i++) {
        newBoard[i] = new Array(board[0].length);
    }

    console.log(newBoard);

    for (let i = 0; i < board.length; i++) {
            
            for (let j = 0; j < board[i].length; j++) { 
                let sum = 0;
                
                for (k = 0; k < 8; k++) {
                    
                    if ((i + dx[k]) == -1 || (i + dx[k]) == board.length || 
                        (j + dy[k]) == -1 || (j + dy[k]) == board[i].length) {
                        continue;
                    }
                    else {
                        sum += board[i + dx[k]][j + dy[k]];
                    }
                }
                console.log(sum);

                if (board[i][j] == 1) {
                    
                    if (sum < 2) {
                        newBoard[i][j] = 0;
                    }
                    else if (sum == 2 || sum == 3) {
                       newBoard[i][j] = board[i][j];
                    }
                    else if (sum > 3) {
                        newBoard[i][j] = 0;
                    }
                }
                else if (board[i][j] == 0) {

                    if (sum == 3) {
                        newBoard[i][j] = 1;
                    }
                    else {
                        newBoard[i][j] = board[i][j];
                    }
                }
            }
    }

    for (let i = 0; i < newBoard.length; i++) {

        for (let j = 0; j < newBoard[i].length; j++) {
            board[i][j] = newBoard[i][j];
        }
    }
};

console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]));