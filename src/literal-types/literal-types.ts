let n = 10;
n = 0b1010;
console.log(n, "n is a number type");

const m = 10;
console.log(m, 'm is a "10" type');

let b = 100 as const; // eslint-disable-line

const person = {
    name: "Abacaxiguy" as const,
    age: 18,
};

console.log(person);

function chooseTheColor(color: "Red" | "Green" | "Yellow") {
    return color;
}

console.log(chooseTheColor("Red"));
