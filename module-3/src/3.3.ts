{
    //Type Guard
    type AlphaNumeric = string | number
    const add = (num1: AlphaNumeric, num2: AlphaNumeric): AlphaNumeric => {
        if (typeof num1 === "number" && typeof num2 === "number") {
            return num1 + num2
        } else {
            return num1.toString() + num2.toString()
        }
    }
    const calculation1 = add("20", 20)

    //In Guard
    type User = {
        name: string;
    }
    type Admin = {
        name: string;
        role: "Admin";
    }

    const getUser = (user: User | Admin) => {
        if ("role" in user) {
            return "he is an admin"
        } else {
            return "he is a User"
        }
    }

    const user: User = {
        name: "imran",
    }
    const admin: Admin = {
        name: "amir khan",
        role: "Admin"
    }
    console.log(getUser(admin));





















}