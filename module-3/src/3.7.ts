{
    //static
    class Counter {
        static count: number = 0;
        increment() {
            return Counter.count += 1;
        }
    }

    const ins1 = new Counter();
    // console.log(ins1.increment());

    const ins2 = new Counter();
    // console.log(ins2.increment());

    //Polymorphism
    class Animal {
        sleep() {
            console.log("I sleep 10 hours in a day ");
        }
    }
    class Dog extends Animal {
        sleep() {
            console.log("I sleep 12 hours in a day ");
        }
    }
    class Cat extends Animal {
        sleep() {
            console.log("I sleep 15 hours in a day ");
        }
    }

    const getsleepingHours = (obj: Animal) => {
        obj.sleep()
    }

    const animal = new Animal()
    const dog = new Dog()
    const cat = new Cat()

    getsleepingHours(animal)
    getsleepingHours(dog)
    getsleepingHours(cat)










}