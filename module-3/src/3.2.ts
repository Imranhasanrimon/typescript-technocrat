{
    //OOP Inheritance
    class Person {               //parent
        name: string;
        profession: string;
        email: string;

        constructor(name: string, profession: string, email: string) {
            this.name = name;
            this.profession = profession;
            this.email = email;
        }

        sleep(hours: number) {
            console.log(`${this.name} sleeps ${hours} hours in a day`);
        }
    }

    //child class for student
    class Student extends Person {
        qualification: string;
        hostelName: string;

        constructor(name: string, profession: string, email: string, qualification: string, hostelName: string) {
            super(name, profession, email)
            this.qualification = qualification;
            this.hostelName = hostelName;
        }
    }
    const student1 = new Student("Asik", "student", "asik@gmail.com", "BBA", "Zoha");
    student1.sleep(5)
    // console.log(student1);


    //child class for teacher
    class Teacher extends Person {

        constructor(public name: string, public profession: string, public email: string, public desig: string, public sallery: number) {
            super(name, profession, email);
            this.desig = desig;
            this.sallery = sallery;
        }
        tellSallery() {
            console.log(this.sallery);
        }
    }

    const teacher1 = new Teacher("Atik Sir", "Professor", "atik@gmail.com", "PHD holder", 2000)

    teacher1.tellSallery()






















}