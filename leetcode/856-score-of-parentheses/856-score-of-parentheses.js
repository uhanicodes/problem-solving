var scoreOfParentheses = function(s) {
    let score = 0;

    for (let i = 0; i < s.length; i++) {

        if (s[i] == ')') {
            score++;
        }
    }
    return score;
};

console.log(scoreOfParentheses("(())"));
console.log(scoreOfParentheses("()"));
console.log(scoreOfParentheses("()()()"));

console.log(scoreOfParentheses("(()(()))")); // Expected: 6 / Output : 4