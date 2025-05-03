{
    type Roll = number[];
    const roll: Roll = [12, 84, 234,]

    interface Roll2 {
        [index: number]: number;
    }
    const roll2: Roll2 = [43, 342, 423]

    type Add = (n: number, n2: number) => number;

    const add: Add = (n, n2) => n + n2;


    interface Add2 {
        (n: number, n2: number): number
    }

    const add2: Add2 = (n, n2) => n * n2

    //GENERIC TYPE---------

    // type GenericArray<param> = Array<param>
    type GenericArray<T> = Array<T>

    const names: GenericArray<string> = ["imran", "saad", "najmul"];
    // const names: string[] = ["imran", "saad", "najmul"];
    const ids: GenericArray<number> = [24, 34, 32]
    // const ids: number[] = [24, 34, 32]

    const users: GenericArray<{ name: string, sallary: number, role: string }> = [
        {
            name: "imran",
            role: "junior",
            sallary: 20000
        },
        {
            name: "jhanker",
            role: "team lead",
            sallary: 20000
        },
        {
            name: "mejba",
            role: "senior",
            sallary: 220000
        }
    ]

    //tuple
    const boys: [string, number] = ["imran", 24]

    //union
    const boys2: (boolean | string | number)[] = ["imran", 25, "falsj", false]

    //Generic Tuple
    type GenericTuple<X, Y> = [X, Y];

    interface Core { name: string, email: string }
    const userInfo: GenericTuple<number, Core> = [2555, { name: "imrna", email: "imran@gamil.com" }]

















}