{
    //__________Problem 1__________

    // method1
    type SumArray = (numbers: number[]) => number;
    const sumArray: SumArray = (numbers) => {
        const sum: number = numbers.reduce((acc: number, curr: number): number => acc + curr, 0);
        return sum
    }

    // method2
    const sumArray2 = (numbers: number[]): number => {
        return numbers.reduce((acc, curr) => acc + curr, 0)
    }


    //__________Problem 2__________
    type RemoveDuplicates = (numbers: number[]) => number[]
    const removeDuplicates: RemoveDuplicates = (numbers) => {
        const newArray: number[] = [];
        numbers.forEach(number => {
            if (!newArray.includes(number)) {
                newArray.push(number)
            }
        })

        return newArray
    }

    //__________Problem 3__________
    type CountWordOccurrences = (sentence: string, word: string) => number
    const countWordOccurrences: CountWordOccurrences = (sentence, word) => {
        const arrayOfWords: string[] = sentence.toLowerCase().split(" ");
        return arrayOfWords.filter(aWord => aWord === word.toLowerCase()).length
    }

    //__________Problem 4__________
    type Circle = {
        shape: "circle";
        radius: number
    }
    type Rectangle = {
        shape: "rectangle";
        width: number;
        height: number;
    }

    type Shape = Circle | Rectangle;
    type CalculateShapeArea = (shape: Shape) => number | string;

    const calculateShapeArea: CalculateShapeArea = (shape) => {
        if (shape.shape === "circle") {
            return Math.PI * shape.radius * shape.radius
        } else {
            return shape.width * shape.height;
        }
    }

    //__________Problem 5__________
    const getProperty = <X, Y extends keyof X>(obj: X, prop: Y): X[Y] => {
        return obj[prop];
    };

    //__________Problem 6__________
    interface Profile {
        name: string;
        age: number;
        email: string;
    }

    const updateProfile = (profile: Profile, updates: Partial<Profile>): Profile => {
        return { ...profile, ...updates }
    }

    //__________Problem 7__________
    class Car {
        make: string;
        model: string;
        year: number;
        constructor(make: string, model: string, year: number) {
            this.make = make;
            this.model = model;
            this.year = year;
        }
        getCarAge(): number {
            const date = new Date()
            return date.getFullYear() - this.year;
        }
    }

    const validateKeys = <T extends object>(obj: T, keys: (keyof T)[]): boolean => {
        for (const key of keys) {
            if (!(key in obj)) {
                return false;
            }
        }
        return true;
    };


    const person = { name: "Alice", age: 25, email: "alice@example.com" };
    console.log(validateKeys(person, ["age"])); // ✅ true













}