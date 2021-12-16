// Tuple
const clientData1: readonly [number, string] = [1, "idk"];
const clientData2: [number, string, string] = [1, "idk", "maybe?"];
const clientData3: [number, string, string?] = [1, "idk"];
const clientData4: [number, string, ...string[]] = [1, "idk", "maybe?"];

// clientData1[0] = 100;
// clientData1[1] = "not maybe";

console.log(clientData1);
console.log(clientData2);
console.log(clientData3);
console.log(clientData4);

// readonly array
const array1: readonly string[] = ["array", "that dont change"];
const array2: ReadonlyArray<string> = ["array", "that dont change"];

console.log(array1);
console.log(array2);
