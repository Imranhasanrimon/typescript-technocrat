class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    greed() {
        console.log(`Hi, my name is ${this.name}`);
    }
}
const person1 = new Person("imran", 23);
// console.log(person1.greed());

//task-1
class Car {
    constructor(brand, year) {
        this.brand = brand;
        this.year = year;
    }
    describe() {
        console.log(`This is a ${this.brand} from ${this.year}`);
    }
}

const car1 = new Car("Audi", 2002);
// console.log(car1.describe());

//task-2
class Counter {
    constructor() {
        this.value = 0
    }

    increase() {
        this.value++
    }
}
const counter = new Counter();
// console.log(counter);

//task-3
class Student {
    constructor() {
        this.name = "Guest";
        this.grade = 2;
    }
    promote() {
        this.grade++;
    }
    info() {
        console.log(`grade is: ${this.grade}`);
    }
}

const student1 = new Student();
student1.promote()
student1.info()