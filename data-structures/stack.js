class Stack {

    constructor() {
        this.array = new Array(10);
        this.count = 0;
    }

    push (v) {

        if (this.count == 10) {
            return;
        }

        this.array[this.count] = v;
        this.count++;
    };

    pop () {
        let v = this.array[this.count - 1];
        this.count--;
        return v;
    };
};

let stack1 = new Stack();

stack1.push(15);
stack1.push(19);

console.log('count (stack 1)', stack1.count);
console.log('pop (stack 1)', stack1.pop());

let stack2 = new Stack();

stack2.push(25);

console.log('pop (stack 2)', stack2.pop());

stack1.push('o');
stack1.push('l');
stack1.push('l');
stack1.push('e');
stack1.push('H');
console.log('pop (stack 1)', stack1.pop());
console.log('pop (stack 1)', stack1.pop());
console.log('pop (stack 1)', stack1.pop());
console.log('pop (stack 1)', stack1.pop());
console.log('pop (stack 1)', stack1.pop());