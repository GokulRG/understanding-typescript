let userType: unknown;
// This is similar to any but a bit more restrictive
// you can assign any value to a variable of type unknown

userType = 5;
userType = "Max";

// But you can't assign a variable of unknown type to a variable of another type
let userName: string;

// Even though you have Max stored in userType. you can't assign it directly to userName;
// userName = userType; will throw an error.

// But if you had used any instead of unknown type this would have worked. Because if you had used any, TS doesn't do any typechecking on it
// to get this to work you have to manually make sure that it's a string before you can assign

// Below code would work, but you can't directly assign unknown to any other type
if (typeof userType === "string") {
  userName = userType;
}

// 'never' return type
// Sine the execution of this function is stopped even before it reaches to the return portion of the function, this function is said to have a return type of never
// Typescript will infer it to be void.
// But if it were void, if you try to print the result of this function's execution, you should see undefined. But in this case you see nothing!
// Because the code crashes before it gets to that part

function generateError(message: string, code: number): never {
  throw { message, code };
}

console.log("Recompilation Test");
generateError("An error occurred!", 500);
