// Conditions & Loops

console.log("=== IF STATEMENT ===");

// Simple If
let age = 18;
if (age >= 18) {
    console.log("You are an adult");
}

// If-Else
let marks = 45;
if (marks >= 50) {
    console.log("Pass");
} else {
    console.log("Fail");
}

// If-Else If-Else
let score = 75;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

// Ternary Operator
let status = age >= 18 ? "Adult" : "Minor";
console.log(status);

// Switch Statement
console.log("\n=== SWITCH ===");
let day = 3;
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    default:
        console.log("Invalid day");
}

console.log("\n=== FOR LOOP ===");
// Traditional For Loop
for (let i = 0; i < 5; i++) {
    console.log("i =", i);
}

// For-In (iterates over keys)
let obj = { name: "John", age: 25 };
for (let key in obj) {
    console.log(key, ":", obj[key]);
}

// For-Of (iterates over values)
console.log("\n=== FOR-OF LOOP ===");
let numbers = [10, 20, 30];
for (let num of numbers) {
    console.log(num);
}

console.log("\n=== WHILE LOOP ===");
let count = 1;
while (count <= 3) {
    console.log("Count:", count);
    count++;
}

console.log("\n=== DO-WHILE LOOP ===");
let x = 1;
do {
    console.log("x =", x);
    x++;
} while (x <= 2);

console.log("\n=== BREAK & CONTINUE ===");
// Break
for (let i = 0; i < 5; i++) {
    if (i === 3) break;
    console.log("Break test:", i);
}

// Continue
for (let i = 0; i < 5; i++) {
    if (i === 2) continue;
    console.log("Continue test:", i);
}
