interface NameType {
    name: string;
}

interface LastNameType {
    lastName: string;
}

interface FullNameType {
    fullName(): string;
}

type PersonType = NameType & LastNameType & FullNameType;
interface PersonType2 extends NameType, LastNameType, FullNameType {}

export class Person implements PersonType {
    constructor(public name: string, public lastName: string) {}

    fullName(): string {
        return this.name + " " + this.lastName;
    }
}

const personObj: PersonType2 = {
    name: "Joao",
    lastName: "Lucas",
    fullName() {
        return this.name + " " + this.lastName;
    },
};

const person = new Person("Joao", "Lucas");
console.log(person.fullName());
console.log(personObj.fullName());
