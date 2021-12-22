type HasName = { name: string };
type HasLastName = { lastName: string };
type HasAge = { age: number };
type Person = HasName & HasLastName & HasAge;

const person: Person = {
    age: 1,
    name: "Abacaxiguy",
    lastName: "from Github",
};

console.log(person);

type AB = "A" | "B";
type AC = "A" | "C";
type AD = "D" | "A";

type Intersection = AB & AC & AD;

const what: Intersection = "A";
console.log(what);

// Module mode
export default 1;
