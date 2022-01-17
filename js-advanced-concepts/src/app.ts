// type AddFn = (a: number, b: number) => number;
// You can also do something like the one above by using interfaces
interface AddFn {
  // If you don't specify a function name, it will be treated as a type like above
  (a: number, b: number): number;
}

// Interfaces
interface Named {
  // Only modifier that's allowed in an interface is readonly. Then you can't override the name once it's been assigned once.
  readonly name?: string;

  // Optional properties in interfaces. Adding the question mark makes sure that it's not mandated by implementing classes
  outputName?: string;
}

// Interface can also extend from another interface
// You can inherit from multiple interfaces as well
// In TS you can't use extends on multiple classes though
interface Greetable extends Named {
  // Will contain only variables and types. Not the actual values
  greet(phrase: string): void;
}

// We can also use interfaces to enforce the behavior in the classes
class Person implements Greetable {
  name?: string;
  age: number;

  constructor(name: string, age: number) {
    if (name) {
      this.name = name;
    }
    this.age = age;
  }

  greet(phrase: string) {
    console.log(phrase + " " + this.name ?? "Anonymous");
  }
}

// We can use this interface to typecheck an object
let user1: Person = {
  name: "Gokul",
  age: 31,

  greet(phrase: string) {
    console.log(phrase + " " + this.name);
  },
};

user1.greet("Hi there! I am ");
