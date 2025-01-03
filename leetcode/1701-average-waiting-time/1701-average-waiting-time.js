let averageWaitingTime = (customers) => {
    let waitingTimes = [];

    for (i = 0; i < customers.length; i++) {

        //1.chef may be free while a customer arrives
            //waiting time = time[i]
        
        //2.chef may be not free while a customer arrives
            //waiting time = time[i] + (order finish time of i-1 - arrival time[i])
    }
}