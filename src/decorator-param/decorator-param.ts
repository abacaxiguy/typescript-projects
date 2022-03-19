function decorator(
    classPrototype: any,
    methodName: string | symbol,
    index: number,
): any {
    console.log(classPrototype);
    console.log(methodName);
    console.log(index);

    return "something";
}

export class OnePerson {
    name: string;
    lastName: string;
    age: number;

    constructor(
        @decorator name: string,
        @decorator lastName: string,
        @decorator age: number,
    ) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    method(@decorator msg: string): string {
        return `${this.name} ${this.lastName}: ${msg}`;
    }

    get fullName(): string {
        return this.name + " " + this.lastName;
    }

    set fullName(value: string) {
        const words = value.split(/\s+/g);
        const firstName = words.shift();
        if (!firstName) return;
        this.name = firstName;
        this.lastName = words.join(" ");
    }
}

const person = new OnePerson("me", "meeseek", 9);
const method = person.method("its me");
console.log(method);
