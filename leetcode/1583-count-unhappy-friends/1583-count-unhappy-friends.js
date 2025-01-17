let isUnhappy = (x, preferences, y, pairs) => {

    for (let j = 0; j < preferences[x].length; j++) {
        
        if (preferences[x][j] !== y) {
            let u = preferences[x][j];
            let v;

            for (let k = 0; k < pairs.length; k++) {

                if (pairs[k][0] == u) {
                    v = pairs[k][1];
                }
                else if (pairs[k][1] == u) {
                    v = pairs[k][0];
                }
            }
            
            let indexOfv, indexOfx;
            
            for (let k = 0; k < preferences[u].length; k++) {

                if (preferences[u][k] == v) {
                    indexOfv = k;
                }
                
                if (preferences[u][k] == x) {
                    indexOfx = k;
                }
            }

            if (indexOfx < indexOfv) {
                return true;
            }
        }
        else {
            break;
        }
    }

    return false;
} 

var unhappyFriends = function(n, preferences, pairs) {
    let unHappyFriends = 0;
    
    for (let i = 0; i < pairs.length; i++) {
        let x = pairs[i][0];
        let y = pairs[i][1];

        if (isUnhappy(x, preferences, y, pairs)) {
            unHappyFriends++;
        }

        if (isUnhappy(y, preferences, x, pairs)) {
            unHappyFriends++;
        }
    }
    
    return unHappyFriends;
};

console.log(unhappyFriends(4, [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], [[0, 1], [2, 3]]));

console.log(unhappyFriends(2, [[1], [0]], [[1, 0]]));

console.log(unhappyFriends(4, [[1, 3, 2], [2, 3, 0], [1, 3, 0], [0, 2, 1]], [[1, 3], [0, 2]]));