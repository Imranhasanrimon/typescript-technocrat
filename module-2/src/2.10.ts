{
    //

    const arrayOfNumbers: number[] = [1, 32, 35];
    // const arrayOfStrings: string[] = ['1', '32', '35']
    const arrayOfStrings: string[] = arrayOfNumbers.map(string => string.toString())

    // console.log(arrayOfNumbers);
    // console.log(arrayOfStrings);

    type AreaNumber = {
        height: number;
        width: number
    }

    type AreaString = {
        [key in keyof AreaNumber]: string
    }

    type AreaDynamic<T> = {
        [key in keyof T]: T[key]
    }

    const area: AreaDynamic<{ height: number; width: string }> = {
        height: 20,
        width: ""
    }

    //Pick Utility
    //Omit Utility
    //Partial Utility
    //Required Utility
    //Readonly Utility




    //Pick Utility
    type Person = {
        name: string;
        age: number;
        address?: string;
        email: string;
    }
    type NameAge = Pick<Person, "name" | "age">

    //Omit Utility
    type ContactInfo = Omit<Person, "name" | "age">

    type PersonPartial = Partial<Person>
    type PersonRequired = Required<Person>
    type PersonReadonly = Readonly<Person>

    const person: Required<Readonly<Partial<Person>>> = {
        name: "imang",
        age: 20,
        email: "ea@gamil.com",
        address: "BD"
    }

    type MyObj = {
        name: string;
        email: string;
    }

    type DynamicT = Record<string, string>
    const myObj: DynamicT = {
        name: "imrna",
        email: "imat@gamilcom",
        ashf: "jaflk"
    }

    type UserRole = "back" | "front" | "full"
    type MyUserRole = Record<UserRole, boolean>

    const myUserRole: MyUserRole = {
        back: true,
        front: false,
        full: true,
    }

    const quickObj: Record<string, unknown> = {
        hi: 20,
        hellow: "okay"
    }











    //
}