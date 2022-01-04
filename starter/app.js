var userType;
// This is similar to any but a bit more restrictive
// you can assign any value to a variable of type unknown
userType = 5;
userType = "Max";
// But you can't assign a variable of unknown type to a variable of another type
var userName;
// Even though you have Max stored in userType. you can't assign it directly to userName;
// userName = userType; will throw an error.
// But if you had used any instead of unknown type this would have worked. Because if you had used any, TS doesn't do any typechecking on it
// to get this to work you have to manually make sure that it's a string before you can assign
// Below code would work, but you can't directly assign unknown to any other type
if (typeof userType === "string") {
    userName = userType;
}
function generateError(message, code) {
    throw { message: message, code: code };
}
generateError("An error occurred!", 500);
