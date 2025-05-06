{
    //instanceof guard
    class Animal {
        name: string;
        species: string;

        constructor(name: string, species: string) {
            this.name = name;
            this.species = species;
        }

        makeSound() {
            console.log("I'm making sound");
        }
    }

    class Dog extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }

        makeBark() {
            console.log("Dog is barking");
        }
    }
    class Cat extends Animal {
        constructor(name: string, species: string) {
            super(name, species)
        }

        makeMeaw() {
            console.log("Cat is Meawing");
        }
    }

    const dog = new Dog("Big dog", "dog");
    const cat = new Cat("small cat", 'cat')
    // const animal = new Animal("common animal", "all")

    const isDog = (animal: Animal): boolean => {
        return animal instanceof Dog
    }
    const isCat = (animal: Animal): boolean => {
        return animal instanceof Cat
    }

    const getAnimal = (animal: Animal) => {
        if (isDog(animal)) {
            animal.makeBark()
        } else if (isCat(animal)) {
            animal.makeMeaw()
        } else {
            animal.makeSound()
        }
    }

    getAnimal(dog)
































}