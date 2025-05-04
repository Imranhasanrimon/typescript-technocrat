{
    //generic constraints with Keyof operator

    type Vehicles = {
        car: string;
        ship: string;
        bike: string;
        helicoptor: string
    }

    type Owner = "car" | "ship" | "bike" | "helicoptor"

    const user: Owner = "car"
    const user2: keyof Vehicles = "bike"


    const student = {
        name: "abul khan",
        class: 5,
        batch: 8
    }

    const getStudentInfo = (student: object, key: string) => {
        return student[key];
    }

    const student1 = getStudentInfo(student, "name")












}