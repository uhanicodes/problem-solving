class Queue {

    constructor() {
        this.front = this.rear = -1;
        this.array = new Array(10);
    }

    enqueue(v) {

        if (this.rear == this.array.length - 1) {
            return;
        }

        if (this.front == -1 && this.rear == -1) {
            this.front = 0;
        }        
        
        this.rear++;
        this.array[this.rear] = v;
    }

    dequeue() {

        if (this.front == -1 && this.rear == -1) {
            return;
        }

        let frontValue = this.array[this.front];
        this.front++;
        
        if (this.front - 1 == this.rear) {
            this.front = this.rear = -1;
        }

        return frontValue;
    }
}

let queue1 = new Queue();

queue1.enqueue(10);
queue1.enqueue(12);

console.log(queue1.dequeue());
console.log(queue1.dequeue());