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

var scoreOfParentheses = function(s) {
    let score = new Stack();

    for (let i = 0; i < s.length; i++) {
    
        if (s[i] == '(') {
            score.push(0);
        }

        if (s[i] == ')') {
            let A = 0;

            if (s[i - 1] == '(') {
                score.pop();
                score.push(1);
            }
            else {  
                while (score.pop() !== 0) {
                    A += score.pop()
                }

                if (score.pop() == 0) {
                    score.push(2 * A);
                }
            }
        }        
    }

    let x = score.pop();
    return x;
};

console.log(scoreOfParentheses("(())"));
console.log(scoreOfParentheses("()"));
console.log(scoreOfParentheses("()()()"));

console.log(scoreOfParentheses("(()(()))")); // Expected: 6 / Output : 4