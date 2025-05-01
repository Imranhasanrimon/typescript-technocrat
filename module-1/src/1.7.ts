{
    const bros1: string[] = ["saad", "najmul", "ariful"]
    const bros2: string[] = ["masud", "rahman", "zahid"]

    bros1.push(...bros2)

    type FirstName = string;
    type User = {
        fName: string;
        lName: string;
        age: number;
        isMarried: boolean;
    }
    type Add = (num1: number, num2: number) => number;

    const firstName: FirstName = "lakjf"
    const user: User = {
        fName: "Imran",
        lName: "Hasan",
        age: 23,
        isMarried: false
    }

    const add: Add = (num1, num2) => num1 + num2











}