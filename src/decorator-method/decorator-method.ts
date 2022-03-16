function decorator(
    classPrototype: any,
    methodName: string,
    descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
    console.log(classPrototype);
    console.log(methodName);
    console.log(descriptor);

    return {
        value: function (...args: string[]) {
            return args[0].toUpperCase();
        },
    };
}

export class OnePerson {
    name: string;
    lastName: string;
    age: number;

    constructor(name: string, lastName: string, age: number) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    @decorator
    method(msg: string): string {
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
