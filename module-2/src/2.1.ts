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

    type User3 = {
        tech: number;
        isBackend: boolean;
    } & User & User2;

    const user3: User3 = {
        name: "imr",
        tech: 5,
        isBackend: true,
        age: 23,
        isMarried: false,
        profession: "Dev",
        edu: "BBA",
        experienceInYears: 20,
        salleryPerMonth: 2000000

    }

    type Relation = string;
    const relationStatus: Relation = "Unmarried"

    interface Man {
        name: string;
        role: string;
    }

    type Man2 = {
        sth: string;
        more: boolean;
    } & Man;

    const man2: Man2 = {
        sth: "janina",
        more: false,
        name: "Imran Hasan",
        role: "FSD"
    }

    type Man4 = {
        status: boolean
    }

    type Man5 = string;

    interface Man3 extends Man4 {
        school: string;
        class: number;
    }

    type Man6 = {
        name: string;
        profession: string;
        isMarried: boolean;
    }
    type Man7 = {
        lName: string;
        role: string;
        isExperienced: boolean;
    }







}