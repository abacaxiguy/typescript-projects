/* eslint-disable @typescript-eslint/no-explicit-any */
function decorator(classPrototype: any, methodName: string | symbol): any {
    let propertyValue: string | number;
    console.log(classPrototype);
    console.log(methodName);

    return {
        get: () => propertyValue,
        set: (value: string | number) => {
            if (typeof value === "string") {
                propertyValue = value.split("").reverse().join("");
                return;
            }
            propertyValue = value;
        },
    };
}

export class OnePerson {
    @decorator
    name: string;
    @decorator
    lastName: string;
    @decorator
    age: number;

    constructor(name: string, lastName: string, age: number) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

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
