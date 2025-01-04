var unhappyFriends = function(n, preferences, pairs) {
    let unHappyFriends = 0;
    //1.traverse in each friends;
    //2.traverse in each preferences' length;
    //3.traverse in each pairs;
    for (let i = 0; i < n.length; i++) {

        for (let j = 0; j < preferences[i].length; j++) {

            for (let k = 0; k < pairs.length; k++) {

                for (let l = 0; l < pairs[k].length; l++) {
                               
                }
            }
        }
    }
    return unHappyFriends;
};

unhappyFriends(4, [[1, 2, 3], [3, 2, 0], [3, 1, 0], [1, 2, 0]], [[0, 1], [2, 3]]);