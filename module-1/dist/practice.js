"use strict";
var _a;
{
    // Problem 1
    const userAge = 24;
    // Problem 2
    const isLoggedIn = true;
    // Problem 3
    const book = {
        title: "Subtle Art of Not Giving A Fuck",
        author: "Mark Manson",
        publishedYear: 2006,
    };
    const buttonType = "danger";
    const add = (num1, num2) => num1 + num2;
    // Problem 6
    const greet = (name) => `Hello, ${name}`;
    // Problem 7
    const product = {
        id: 101,
        name: "Laptop",
        price: 999
    };
    const { name, price } = product;
    const myCar = {
        brand: "Audi",
        model: "Q58",
        year: 2005
    };
    // Problem 9
    const inputValue = 20;
    const adminUser = {
        role: "admin",
        accessLevel: 20,
        username: "Imran"
    };
    // Problem 11
    const userInput = null;
    const status = userInput !== null && userInput !== void 0 ? userInput : "default";
    // Problem 12
    const person = {
        profile: {
            email: "test@example.com"
        }
    };
    const email = (_a = person === null || person === void 0 ? void 0 : person.profile) === null || _a === void 0 ? void 0 : _a.email;
    // Problem 13
    const fail = (message) => {
        throw new Error(message);
    };
    // Problem 14
    const value = false;
    if (typeof value === "string") {
        console.log("a string", value.length);
    }
    else {
        console.log("this is not a string");
    }
}
