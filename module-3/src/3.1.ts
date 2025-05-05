{
    //OOP- Class
    class Animal {
        name: string;
        category: string;
        sound: string;

        constructor(name: string, category: string, sound: string) {
            this.name = name;
            this.category = category;
            this.sound = sound;
        }
        makeSound() {
            console.log(`The ${this.name} says ${this.sound}`);
        }
    }

    const animal1 = new Animal("imran", "man", "hahaha")
    const animal2 = new Animal("Kalu", "Dog", "Bhuk Bhuk")

    animal2.makeSound()

    //simple version
    class Student {
        constructor(public name: string, public yourClass: number, public nickName: string) { }

        call() {
            console.log(`Hi ${this.name}, aren't you ${this.nickName} ?`);
        }
    }
    const student1 = new Student("imran", 9, "prince")
    student1.call()





























}