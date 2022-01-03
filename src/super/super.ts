export class Person {
    constructor(
        public name: string,
        public lastName: string,
        private age: number,
        protected cpf: string,
    ) {}

    getAge(): number {
        return this.age;
    }

    getCpf(): string {
        return this.cpf;
    }

    getFullName(): string {
        return this.name + " " + this.lastName;
    }
}

export class Student extends Person {
    constructor(
        name: string,
        lastName: string,
        age: number,
        cpf: string,
        public classroom: string,
    ) {
        super(name, lastName, age, cpf);
    }

    getFullName(): string {
        console.log("doing something before");
        return super.getFullName();
    }
}

export class Client extends Person {
    getFullName(): string {
        return "This is the client called: " + this.name + " " + this.lastName;
    }
}

const ordinaryPerson = new Person("I'm", "a person", 30, "000.000.000-00");
const bestStudent = new Student("A+", "student", 16, "000.000.000-00", "0001");
const poorClient = new Client("not that", "rich", 24, "000.000.000-00");

console.log(ordinaryPerson.getFullName());
console.log(bestStudent.getFullName());
console.log(poorClient.getFullName());
