{
    // Generic type for function

    const additon = <T>(num: T): T[] => {
        return [num];
    }

    interface Developer { name: string; isDev: boolean }

    additon<number>(20);
    additon<string>("42")
    additon<Developer>({ name: "imran", isDev: true })

    const createArrayWithTuple = <T, Q>(param1: T, param2: Q): [T, Q] => {
        return [param1, param2]
    }

    createArrayWithTuple<number, string>(20, "imrna")

    const addCourseToStudent = <T extends { name: string; id: number; email: string }>(student: T) => {
        const course = "Next Level Web Development";

        return {
            ...student,
            course
        }
    }

    const student1 = addCourseToStudent({ id: 1254, name: "imrna", email: "imrna@gmail.com" })

    //Constraints
    const student2 = addCourseToStudent({ id: 1254, name: "sajjad", email: "sajj@gmail.com" })
    const student3 = addCourseToStudent({ id: 1254, name: "Asik", email: "asik@gmail.com" })




}