"use strict";
function add(n1, n2) {
    return n1 + n2;
}
function printResult(num) {
    console.log(`Result is ${num}`);
}
let addFunction;
function addAndHandle(n1, n2, cb) {
    const result = n1 + n2;
    cb(result);
}
addFunction = add;
addAndHandle(12, 11, printResult);
//# sourceMappingURL=functions.js.map