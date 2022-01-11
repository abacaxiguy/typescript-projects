type NameType = {
    name: string;
};

type LastNameType = {
    lastName: string;
};

type FullNameType = {
    fullName: () => string;
};

export class Person implements NameType, LastNameType, FullNameType {
    constructor(public name: string, public lastName: string) {}

    fullName(): string {
        return this.name + " " + this.lastName;
    }
}

const person = new Person("Joao", "Lucas");
console.log(person.fullName());
