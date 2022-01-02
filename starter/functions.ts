// For the below function typescript would be able to infer the return type as number
// you can also manually add a return type by using the colon (:) operator
function add(n1: number, n2: number): number {
  return n1 + n2;
}

// It's definitely a better idea to let TS do it's thing and not specify one unless TS can't infer it automatically

// The below function will automatically be assigned a void return type
function printResult(num: number) {
  console.log(`Result is ${num}`);
}

// Undefined is also a return type in TS. Don't confuse that with void
// If you have the return type as undefined, you need to have a return statement but it should return undefined. something like `return;`

// Function is a type too. So if you wanted to assign a function to a variable you can use the type Function to denote that
// But we do need some sort of guarantee about the type of the parameters that the function itself accepts.
// So we use a JS arrow function like syntax
let addFunction: (n1: number, n2: number) => number;
// The above line means that we have declared a variable called addFunction which will hold another function
// with 2 number arguments with number as the return type.
// Now you can assign add to this variable and it will accept it no problem.
// but if you try to assign printResult to it, it should throw an error

// This type of function type specification is widely used in specifying the type of a callback function
function addAndHandle(n1: number, n2: number, cb: (res: number) => void) {
  const result = n1 + n2;
  cb(result);
}

addFunction = add;
// addFunction = printResult; throws error!

// Now we could use our addAndHandle here to both add and print result at the same time
addAndHandle(12, 11, printResult);
