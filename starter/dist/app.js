"use strict";
let userType;
userType = 5;
userType = "Max";
let userName;
if (typeof userType === "string") {
    userName = userType;
}
function generateError(message, code) {
    throw { message, code };
}
const button = document.querySelector("button");
function handleClick() {
    console.log("Button Clicked");
}
button.addEventListener("click", handleClick);
console.log("Recompilation Test");
//# sourceMappingURL=app.js.map