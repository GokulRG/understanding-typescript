// Union
// If we want to specify multiple data types instead of one single data type for a given parameter we can use a union
// This involves using a pipe | symbol as a separator between multiple types when you specify them.

// Literal types
// When a particular variable/constant is only going to be a specific value we can use literal types. We can combine union with literal types to specify multiple options for the given variable
// If you want to use only one single value, you're better off using a constant

// Type Alias
// We can save a union as a separate type which can be used to refer as a type during declaration
// You can also use literal types in a type alias

type Combinable = number | string;
type ConversionDescriptor = "numeric" | "text";

//Type aliases can be used to "create" your own types. You're not limited to storing union types though - you can also provide an alias to a (possibly complex) object type.
//For example:
// type User = { name: string; age: number };
// const u1: User = { name: 'Max', age: 30 }; // this works!

function combine(
  n1: Combinable,
  n2: Combinable,
  conversion: ConversionDescriptor
) {
  // return n1+n2; // Typescript will complain here because it's not sure whether the union type is compatible with the + operator.
  // This is because TS doesn't check the individual types that you have used in your union.
  // You can circumvent this by manual typechecking.
  if (conversion === "numeric") {
    return +n1 + +n2; //+n1 is an alternate syntax for parseInt or parseFloat. This is shorter
  } else {
    return n1.toString() + n2.toString();
  }
}

console.log(combine(31, 21, "numeric"));
console.log(combine("Kane ", "Williamson", "text"));
