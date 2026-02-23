// Functions & Events

console.log("=== BASIC FUNCTION ===");

// Function Declaration
function greet(name) {
    return "Hello, " + name;
}
console.log(greet("John"));

// Function with Default Parameters
function add(a, b = 0) {
    return a + b;
}
console.log("5 + 3 =", add(5, 3));
console.log("5 + default =", add(5));

// Multiple Parameters
function multiply(x, y, z) {
    return x * y * z;
}
console.log("2 * 3 * 4 =", multiply(2, 3, 4));

console.log("\n=== FUNCTION EXPRESSIONS ===");

// Anonymous Function
const subtract = function(a, b) {
    return a - b;
};
console.log("10 - 5 =", subtract(10, 5));

// Arrow Functions (ES6)
const divide = (a, b) => a / b;
console.log("20 / 4 =", divide(20, 4));

// Arrow Function with multiple statements
const getFullName = (first, last) => {
    const full = first + " " + last;
    return full;
};
console.log(getFullName("John", "Doe"));

console.log("\n=== REST PARAMETERS ===");
// Rest Parameters (...args)
function sum(...numbers) {
    let total = 0;
    for (let num of numbers) {
        total += num;
    }
    return total;
}
console.log("Sum of 1,2,3,4,5 =", sum(1, 2, 3, 4, 5));

console.log("\n=== HIGHER ORDER FUNCTIONS ===");

// Function returning function
function multiply_by(factor) {
    return function(number) {
        return number * factor;
    };
}
const double = multiply_by(2);
console.log("Double of 5 =", double(5));

console.log("\n=== EVENT SIMULATION ===");

// Simulating Click Event
function handleClick(message) {
    console.log("Click detected:", message);
}
handleClick("Button was clicked!");

// Simulating Event with Callback
function addEventListener(element, callback) {
    console.log(`Event listener added for ${element}`);
    callback(); // Trigger after adding listener
}
addEventListener("button", () => {
    console.log("Button clicked event fired!");
});

console.log("\n=== ARRAY METHODS (EVENTS) ===");
let items = [1, 2, 3, 4, 5];

// Map
let doubled = items.map(x => x * 2);
console.log("Doubled:", doubled);

// Filter
let evens = items.filter(x => x % 2 === 0);
console.log("Evens:", evens);

// Reduce
let total = items.reduce((sum, x) => sum + x, 0);
console.log("Total:", total);

// ForEach
items.forEach((item, index) => {
    console.log(`Item ${index}: ${item}`);
});
