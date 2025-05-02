"use strict";
{
    function add(num1, num2) {
        return `the result is ${num1 + num2}`;
    }
    add(20, 30);
    const addition = (age, birthDath) => "" + age + birthDath;
    addition(45, 20);
    const poorUser = {
        name: "imran",
        balance: 0,
        addBalance(balance) {
            return this.balance + balance;
        }
    };
    const user = {
        nema: "imarna"
    };
}
