{
    //Access Modifier
    class BankStatement {
        public readonly id: number;
        public readonly name: string;
        protected _balance: number;

        constructor(id: number, name: string, balance: number) {
            this.id = id;
            this.name = name;
            this._balance = balance;
        }

        public set deposit(amount: number) {
            this._balance += amount
        }
        public get showBalance() {
            return this._balance
        }
    }

    const imranAcc = new BankStatement(102, "Imran Hasan", 500)
    // console.log(imranAcc.showBalance());


    // example of protected
    class StudentStatement extends BankStatement {
        test() {
            this._balance = 20
        }
    }


    //getter and setter
    imranAcc.deposit = 20
    console.log(imranAcc.showBalance);
















































}