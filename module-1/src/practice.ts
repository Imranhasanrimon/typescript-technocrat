{
    // Problem 1
    const userAge: number = 24;

    // Problem 2
    const isLoggedIn: boolean = true;

    // Problem 3
    const book: {
        title: string;
        author: string;
        publishedYear: number;
        summary?: string;
    } = {
        title: "Subtle Art of Not Giving A Fuck",
        author: "Mark Manson",
        publishedYear: 2006,
    };

    // Problem 4
    type ButtonType = "primary" | "secondary" | "danger";
    const buttonType: ButtonType = "danger"

    // Problem 5
    type Add = (num1: number, num2: number) => number;
    const add: Add = (num1, num2) => num1 + num2;

    // Problem 6
    const greet = (name: string) => `Hello, ${name}`

    // Problem 7
    const product = {
        id: 101,
        name: "Laptop",
        price: 999
    }
    const { name, price } = product

    // Problem 8
    type Car = {
        brand: string;
        model: string;
        year: number;
    }
    const myCar: Car = {
        brand: "Audi",
        model: "Q58",
        year: 2005
    }

    // Problem 9
    const inputValue: string | number = 20;

    // Problem 10
    type Admin = { role: "admin", accessLevel: number }
    type User = { username: string }
    type AdminUser = Admin & User;

    const adminUser: AdminUser = {
        role: "admin",
        accessLevel: 20,
        username: "Imran"
    }

    // Problem 11
    const userInput: string | null = null;
    const status = userInput ?? "default"

    // Problem 12
    const person = {
        profile: {
            email: "test@example.com"
        }
    }
    const email = person?.profile?.email;

    // Problem 13
    const fail = (message: string): never => {
        throw new Error(message)
    }

    // Problem 14
    const value: unknown = false;
    if (typeof value === "string") {
        console.log("a string", value.length);
    } else {
        console.log("this is not a string");
    }








}