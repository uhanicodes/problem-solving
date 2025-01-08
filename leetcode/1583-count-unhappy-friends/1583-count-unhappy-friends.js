var unhappyFriends = function(n, preferences, pairs) {
    let unHappyFriends = 0;
    
    for (let i = 0; i < pairs.length; i++) {
        let x = pairs[i][0];
        let y = pairs[i][1];

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
                
            }
            else {
                break;
            }
        }

        
    }
    return unHappyFriends;
};

unhappyFriends(4, [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], [[0, 1], [2, 3]]);