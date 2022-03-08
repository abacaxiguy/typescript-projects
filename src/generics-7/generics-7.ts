export function isNumber(value: unknown): value is number {
    return typeof value === "number";
}

export function sum<T>(...args: T[]): number {
    const result = args.reduce((s, value) => {
        if (isNumber(s) && isNumber(value)) {
            return s + value;
        }
        return s;
    }, 0);

    return result;
}

console.log(sum(2, 2, 2, 2));
console.log(sum(...[2, 2, "2", "2"]));
console.log(sum("2", "2", "2", "2"));
