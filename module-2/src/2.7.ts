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

    const getStudentInfo = <X, Y extends keyof X>(student: X, key: Y) => {
        return student[key];
    }

    const student1 = getStudentInfo(student, "name")

    //asyncronous TS
    const createPromise = (): Promise<string> => {

        const data: string = "something";

        return new Promise<string>((res, rej) => {
            if (data) {
                res(data);
            } else {
                rej("faild to load data")
            }
        })
    }

    const showData = async (): Promise<string> => {
        const data: string = await createPromise();
        console.log(data);
        return data;
    }

    // createPromise().then(data => console.log(data))
    showData()

    type ToDo = {
        userId: number;
        id: number;
        title: string;
        completed: boolean
    }

    const getToDo = async (): Promise<ToDo> => {
        const response = await fetch("https://jsonplaceholder.typicode.com/todos/23")
        const data = await response.json()
        console.log(data);
        return data
    }
    getToDo()


    //conditonal type
    type Sheikh = {
        bike: string;
        car: string;
        ship: string;
        plane: string;
    }

    type CheckVehicle<T> = T extends keyof Sheikh ? true : false;

    type HasPlane = CheckVehicle<"plane">
    type HasCar = CheckVehicle<"car">










}