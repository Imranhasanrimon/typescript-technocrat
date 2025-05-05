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


























}