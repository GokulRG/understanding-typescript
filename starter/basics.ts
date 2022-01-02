// The {} should consist of all the properties and their types. If you don't specify a particular property, it won't compile
// const person: {
//   name: string;
//   age: number;
// }
const person: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Gokul",
  age: 31,
  hobbies: ["Sports", "Chess"],
  // Tuples are fixed length arrays in TS. If you encounter a scenario where an array holds a fixed number of items and the items are of a set datatype you can use tuples instead of regular arrays
  // Example consider a role tuple where the first entry is always an id of the role and the second element is the string description of said role.
  // If you do want to use a tuple the type inference of TS doesn't work because it wouldn't be able to tell apart an array from a tuple. so you need to manually specify the type. See syntax above
  role: [1, "author"],
};

// Specifying a tuple in place of an array will help you with certain validations like
// person.role[1] = 10; throws an error because we've specified the second element to be of type string
// person.role = []; throws an error as well
// however,
// person.role = [1, "compounder"] is allowed
// and person.role.push('compounder') is also allowed. This is one guarantee that TS cannot provide.
// Still having the other type safe guarantees in itself is worth using this feature.

// Let's look at enums
enum Role {
  ADMIN,
  READ_ONLY,
  AUTHOR,
  EXAMPLE = 99,
  ANOTHER = "ONE MORE",
}

// The above is how you declare enums. These are custom types. Eventually each of these values are mapped to an integer and can be used interchangeably.
// This is used for easier comparisons across the codebase when compared to using regular string constants
// The above way of declaring assigns the numbers 0,1 and 2 for admin, readonly and author respectively. but you can also specify your own numbers like in the EXAMPLE Role
// You can assign an enum to any type like the ANOTHER option

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
  console.log(hobby.toUpperCase()); // works perfectly because TS knows that it's a string
  // console.log(hobby.map()); --> Errors out because which is good! Because string doesn't have a map method.
}
