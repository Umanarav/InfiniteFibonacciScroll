let test = require("tape");

test("Fibonacci Numbers", function (t){
    t.plan(6);

    t.equal(fibonacciSequence(0), 0);
    t.equal(fibonacciSequence(1), 1);
    t.equal(fibonacciSequence(2), 1);
    t.equal(fibonacciSequence(3), 2);
    t.equal(fibonacciSequence(4), 3);
    t.equal(fibonacciSequence(5), 5);
});

function fibonacciSequence(n){
    if (n === 0) {
        return 0;
    }
    if (n === 1) {
        return 1;
    }
    return fibonacciSequence(n - 1) + fibonacciSequence(n - 2);
}