const dx = [-1, -1, -1,  0, 0,  1, 1, 1];
const dy = [-1,  0,  1, -1, 1, -1, 0, 1];

var gameOfLife = function(board) {
    let listOfNeighbors = new Array(board.length);
    let currentState = [];

    for (let i = 0; i < listOfNeighbors.length; i++) {
        listOfNeighbors[i] = [];
    }

    for (let i = 0; i < board.length; i++) {

        for(let j = 0; j < board[i].length; j++) {
            // listOfNeighbors.push(board[i-1][j-1], board[i-1][j], board[i-1][j+1], board[i][j-1], board[i][j+1], board[i+1][j-1], board[i+1][j], board[i+1][j+1])
            console.log('source:', i, j);
            
            for (let k = 0; k < 8; k++) {
                
                if ((i + dx[k]) == -1 || (i + dx[k]) == board[i].length || (j + dy[k]) == -1 || (j + dy[k]) == board[i].length) {
                    continue;
                }
                
                listOfNeighbors[i].push(board[i + dx[k]][j + dy[k]]);
            }
        }
    }

    return listOfNeighbors;
};

console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]));