let averageWaitingTime = (customers) => {
    let totalWaitingTime = 0;
    let orderFinishTime = 0;

    for (i = 0; i < customers.length; i++) {

        if (customers[i][0] < orderFinishTime) {
            //2.chef may be not free while a customer arrives
            //waiting time = time[i] + (order finish time of i-1 - arrival time[i])
            orderFinishTime += customers[i][1];
            totalWaitingTime += orderFinishTime - customers[i][0];
        }
        else {
            //1.chef may be free while a customer arrives
            //waiting time = time[i]
            orderFinishTime = customers[i][0] + customers[i][1];
            totalWaitingTime += customers[i][1];
        }
    }

    return totalWaitingTime / customers.length;
}

console.log(averageWaitingTime([[1,2],[2,5],[4,3]]));


console.log(averageWaitingTime([[5,2],[5,4],[10,3],[20,1]]));