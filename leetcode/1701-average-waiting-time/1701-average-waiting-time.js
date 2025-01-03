let averageWaitingTime = (customers) => {
    let waitingTimes = [];
    let orderFinishTime = 0;

    for (i = 0; i < customers.length; i++) {

        if (customers[i][0] < orderFinishTime) {
            //2.chef may be not free while a customer arrives
            //waiting time = time[i] + (order finish time of i-1 - arrival time[i])
            orderFinishTime += customers[i][1];
        }
        else {
            //1.chef may be free while a customer arrives
            //waiting time = time[i]
            orderFinishTime = customers[i][0] + customers[i][1];
        }
    }
}