{
    let val = 20;
    let name = "iman"
    type Obj = {
        name: string;
        age: number;
        education?: {
            level: "university" | "school" | "college";
            year: number
        }

    }

    const obj: Obj = {
        name: "imrna",
        age: 20,
        education: {
            level: "college",
            year: 2000
        }
    }

    const restFn = (...inputs: number[]) => {
        console.log(inputs);
    }

    const clubName: unknown = "barcelona";
    // console.log((<string>clubName).length);

    const genericFn = <T>(input: T): T[] => {

        return [input]
    }

    genericFn("20")

    interface Teacher {
        name: string;
        age: number;
    }

    interface TeacherInfo<T> extends Teacher {
        isPHD: boolean;
        dept: T
    }

    const teacherINfo: TeacherInfo<string> = {
        name: "abul",
        age: 45,
        isPHD: true,
        dept: "Bangla"
    }

    const getProperty = <T, K extends keyof T>(obj: T, key: K) => {
        return obj[key]
    }

    getProperty(teacherINfo, "isPHD")






}