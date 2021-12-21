type Age = number;
type Person = {
    name: string;
    age: Age;
    salary: number;
    color?: Color;
};

type ColorRGB = "Red" | "Green" | "Blue";
type ColorCMYK = "Cyan" | "Magenta" | "Yellow" | "Black";
type Color = ColorRGB | ColorCMYK;

const person1: Person = {
    age: 18,
    name: "HEYY",
    salary: 10_000,
};

function setColor(person: Person, color: Color): Person {
    return { ...person, color: color };
}

console.log(setColor(person1, "Black"));
console.log(person1);
