"use strict";
const person = {
    name: "Gokul",
    age: 31,
    hobbies: ["Sports", "Chess"],
    role: [1, "author"],
};
var Role;
(function (Role) {
    Role[Role["ADMIN"] = 0] = "ADMIN";
    Role[Role["READ_ONLY"] = 1] = "READ_ONLY";
    Role[Role["AUTHOR"] = 2] = "AUTHOR";
    Role[Role["EXAMPLE"] = 99] = "EXAMPLE";
    Role["ANOTHER"] = "ONE MORE";
})(Role || (Role = {}));
const person2 = {
    name: "Gokul",
    age: 31,
    hobbies: ["Sports", "Chess"],
    role: Role.AUTHOR,
};
console.log(person.age);
if (person2.role === Role.AUTHOR) {
    console.log(`${person2.name} is an author!`);
}
for (let hobby of person.hobbies) {
    console.log(hobby.toUpperCase());
}
//# sourceMappingURL=basics.js.map