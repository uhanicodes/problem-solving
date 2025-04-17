class Stack {

    constructor() {
        this.items = [];
    }

    push(number) {
        this.items.push(number);
    }

    pop() {
        
        if (this.items === 0)
            return 'The stack is empty!'
        return this.items.pop();
    }

    peek() {
        return this.items[this.items.length - 1];
    }

    isEmpty() {
        return this.items.length === 0;
    }

    size() {
        return this.items.length;
    }
};

var evalRPN = function(tokens) {
    let operators = ["+", "-", "*", "/"];
    let stack = new Stack();
    
    for (let i = 0; i < tokens.length; i++) {

        if (!operators.includes(tokens[i])) {
            stack.push(Number(tokens[i]));
        }
        else {
            let x = stack.pop();
            let y = stack.pop();
            
            if (tokens[i] == "+") {
                stack.push(y + x);
            }

            if (tokens[i] == "-") {
                stack.push(y - x);
            }

            if (tokens[i] == "*") {
                stack.push(y * x);
            }

            if (tokens[i] == "/") {
                stack.push(Math.trunc(y / x));
            }
        }
    }
    
    return stack.pop();
};

// console.log(evalRPN(["2","1","+","3","*"]));

// console.log(evalRPN(["4","13","5","/","+"]));

// console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]));

console.log(Math.sign(0));