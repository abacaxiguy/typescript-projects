/* eslint-disable */

// Basic types (here occurs type inference)
let song: string = "senta - twikipedia"; // Any type of string: '' "" ``
let age: number = 18; // 10, 1.82, -5.22, 0xf00d, 0b1010, 0o7744
let isGreen: boolean = true; // true or false
let symbol: symbol = Symbol('any-symbol'); // symbol
// let big: bigint = 10n; // bigint

// Arrays
let arrayOfNumbers: Array<number> = [1, 2, 3];
let arrayOfNumbers2: number[] = [1, 2, 3];
let arrayOfStrings: Array<string> = ['aro', 'titles', 'hotel'];
let arrayOfStrings2: string[] = ['aro', 'titles', 'hotel'];

// Objects
let people: { song: string, age: number, isGreen?: boolean } = {
    song,
    age
}

// Functions
function sum(x: number, y: number): number{
    return x + y
}

const sum2: (x: number, y: number) => number = (x, y) => x + y
