// Variables & Operators

console.log("=== VARIABLES ===");

// Variable Declaration
var oldVar = "Old way";
let myVariable = "Modern way";
const myConstant = "Cannot be changed";

console.log(myVariable);
console.log(myConstant);

// Data Types
let number = 42;
let string = "Hello";
let boolean = true;
let nullValue = null;
let undefinedValue;
let array = [1, 2, 3, 4];
let object = { name: "John", age: 25 };

console.log("Number:", typeof number);
console.log("String:", typeof string);
console.log("Boolean:", typeof boolean);
console.log("Array:", Array.isArray(array));

console.log("\n=== OPERATORS ===");

// Arithmetic Operators
let a = 10, b = 5;
console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);
console.log("Exponent:", a ** b);

// Assignment Operators
let x = 20;
x += 5; // x = x + 5
console.log("After += :", x);
x -= 3; // x = x - 3
console.log("After -= :", x);

// Comparison Operators
console.log("\n=== COMPARISON ===");
console.log("10 == '10':", 10 == '10'); // true (loose)
console.log("10 === '10':", 10 === '10'); // false (strict)
console.log("10 > 5:", 10 > 5);
console.log("10 < 5:", 10 < 5);
console.log("10 <= 10:", 10 <= 10);

// Logical Operators
console.log("\n=== LOGICAL ===");
console.log("true && true:", true && true);
console.log("true || false:", true || false);
console.log("!true:", !true);

// Increment & Decrement
let count = 5;
console.log("\ncount++:", count++); // 5 (post-increment)
console.log("++count:", ++count); // 7 (pre-increment)
console.log("count--:", count--); // 7 (post-decrement)
console.log("--count:", --count); // 5 (pre-decrement)

// String Operator
let firstName = "John";
let lastName = "Doe";
console.log("\n" + firstName + " " + lastName); // Concatenation
console.log(`${firstName} ${lastName}`); // Template literal
