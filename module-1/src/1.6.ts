{
    function add(num1: number, num2: number): string {
        return `the result is ${num1 + num2}`
    }

    add(20, 30)

    const addition = (age: number, birthDath: number): string => "" + age + birthDath;

    addition(45, 20)

    const poorUser = {
        name: "imran",
        balance: 0,
        addBalance(balance: number): number {
            return this.balance + balance
        }
    }

    const user = {
        nema: "imarna"
    }











}