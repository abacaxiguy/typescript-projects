export function add(a: unknown, b: unknown) {
    return typeof a === "number" && typeof b === "number" ? a + b : `${a}${b}`;
}

console.log(add(1, 5));
console.log(add("a", "b"));

type Person = { name: string };
type Car = { color: string };
type PersonOrCar = Person | Car;

export class Student implements Person {
    constructor(public name: string) {}
}

function showName(obj: PersonOrCar): void {
    if ("name" in obj) console.log(obj.name);
}

showName(new Student("João"));
