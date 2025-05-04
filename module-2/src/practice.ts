{
    //Task 1 
    const mission: string = "Hello World, I will complete this course successfully and become a Next level Web Developer!";
    // console.log(mission);

    //Task 2
    const myFunc = (name: string, age: number, role?: 'admin' | 'user' | 'guest') => {
        const person = `${name} is ${age} years old. And He/she is ${role}`
        console.log(person);
    }
    // myFunc("imran", 20, "admin")

    //Task 3
    type Person = {
        name: string;
        address: string;
        hairAndEyeColor: string;
        incomeAndExpense: number;
        Hobbies: string[];
        familyMembers: number;
        job: string;
        skills: string[];
        maritalStatus: boolean;
        friends: string[];
    }

    //Task 4
    interface Book {
        title: string;
        author: string;
        price: number;
    }

    interface Magazine {
        topic: string;
        isScientific: boolean;
        price: number
    }

    type UnionType = Book | Magazine
    type IntersectionType = Book & Magazine

    //Task 5
    type ReverseString = (value: string) => string

    const reverseString: ReverseString = (value) => {
        const splittedvalue = value.split("");
        const reversedValue = splittedvalue.reverse().join("")
        return reversedValue
    }

    //Task 6
    const addByRest = (...inputs: number[]): number => {
        let total = 0;
        inputs.forEach(n => total += n)
        return (total);
    }

    //Task 7
    const task7 = (value: string | number) => {
        if (typeof value === "string") {
            return value.length;
        } else {
            return value ** 2
        }
    }

    //Task 8
    type User = {
        name: string;
        email: string;
    }
    type Admin = {
        adminLevel: string;
    }

    type AdminUser = User & Admin;

    //Task 9
    type Employee = {
        name: string;
        address: {
            city: string
        }
    }
    const getEmployeeCity = (employee: Employee): string => {
        return employee?.address?.city;
    }
    const employee = {
        name: "imran",
        address: {
            city: "Rajshahi"
        }
    }

    //Task 10 
    const getDisplayName = (name: string | null | undefined): string => {
        return name ?? "anonymous"
    }

    //Task 11
    const processData = (data: unknown) => {
        if (typeof data === "string") {
            return data.toUpperCase();
        } else if (typeof data === "number") {
            return data ** 2;
        } else {
            return data
        }
    }

    //Task 12
    const handleError = (message: string): never => {
        throw new Error(message)
    }

    //Task 13


    //Task 14


    //Task 15


    //Task 16
    type Student = {
        name: string;
        age: number;
        isMarried: boolean;
        class: number
    }
    const getStudentProp = (student: Student, prop: keyof Student) => {
        return student[prop]
    }



}