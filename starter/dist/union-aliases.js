"use strict";
function combine(n1, n2, conversion) {
    if (conversion === "numeric") {
        return +n1 + +n2;
    }
    else {
        return n1.toString() + n2.toString();
    }
}
console.log(combine(31, 21, "numeric"));
console.log(combine("Kane ", "Williamson", "text"));
//# sourceMappingURL=union-aliases.js.map