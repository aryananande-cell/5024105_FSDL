// Classes & Objects

console.log("=== OBJECT LITERALS ===");

// Simple Object
let person = {
    name: "John",
    age: 25,
    city: "New York"
};
console.log("Name:", person.name);
console.log("Age:", person["age"]);

// Object with Methods
let student = {
    name: "Alice",
    marks: 85,
    getGrade() {
        if (this.marks >= 80) return "A";
        if (this.marks >= 70) return "B";
        return "C";
    }
};
console.log("Grade:", student.getGrade());

console.log("\n=== CLASSES ===");

// Class Definition
class Animal {
    constructor(name, species) {
        this.name = name;
        this.species = species;
    }

    speak() {
        return `${this.name} makes a sound`;
    }

    getInfo() {
        return `${this.name} is a ${this.species}`;
    }
}

// Creating Objects from Class
const dog = new Animal("Buddy", "Dog");
console.log(dog.getInfo());
console.log(dog.speak());

console.log("\n=== INHERITANCE ===");

class Vehicle {
    constructor(brand) {
        this.brand = brand;
    }

    start() {
        return `${this.brand} is starting`;
    }
}

class Car extends Vehicle {
    constructor(brand, model) {
        super(brand);
        this.model = model;
    }

    getDetails() {
        return `${this.brand} ${this.model}`;
    }
}

const myCar = new Car("Toyota", "Camry");
console.log(myCar.start());
console.log(myCar.getDetails());

console.log("\n=== STATIC METHODS ===");

class MathUtils {
    static add(a, b) {
        return a + b;
    }

    static multiply(a, b) {
        return a * b;
    }
}

console.log("10 + 5 =", MathUtils.add(10, 5));
console.log("10 * 5 =", MathUtils.multiply(10, 5));

console.log("\n=== GETTERS & SETTERS ===");

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }

    get area() {
        return this.width * this.height;
    }

    set dimensions(obj) {
        this.width = obj.width;
        this.height = obj.height;
    }
}

const rect = new Rectangle(5, 10);
console.log("Area:", rect.area);
rect.dimensions = { width: 8, height: 6 };
console.log("New Area:", rect.area);

console.log("\n=== PRIVATE FIELDS ===");

class BankAccount {
    #balance = 0; // Private field

    constructor(initialAmount) {
        this.#balance = initialAmount;
    }

    deposit(amount) {
        this.#balance += amount;
        return `Deposited: $${amount}`;
    }

    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);
console.log(account.deposit(500));
console.log("Balance:", account.getBalance());
