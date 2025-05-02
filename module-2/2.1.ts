{
    //Type Assertion

    let anything: any;
    anything = "imran haghsa";
    (anything as number)

    //Type Alias
    type Profession = { profession: string };

    type User = {
        name: string;
        age: number;
        isMarried: boolean
    } & Profession; //intersection type

    const user: User = {
        name: "imran",
        age: 23,
        isMarried: false,
        profession: "Full Stack Developer"
    }

    //Interface
    interface User2 {
        name: string;
        edu: string;
        experienceInYears: number;
        salleryPerMonth: number;
    }

    const user2: User2 = {
        name: "Rimon",
        edu: "BBA",
        experienceInYears: 2,
        salleryPerMonth: 50000,
    }









}