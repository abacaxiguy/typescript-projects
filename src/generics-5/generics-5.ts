export class Person<T, U> {
    constructor(public name: T, public age: U) {}
}

export class Stack<T> {
    private c = 0;
    private elements: { [k: number]: T } = {};

    push(element: T): void {
        this.elements[this.c] = element;
        this.c++;
    }

    pop(): T | void {
        if (this.isEmpty()) return undefined;

        this.c--;
        const element = this.elements[this.c];
        delete this.elements[this.c];
        return element;
    }

    isEmpty(): boolean {
        return this.c === 0;
    }

    size(): number {
        return this.c;
    }

    showStack(): void {
        for (const key in this.elements) {
            console.log(this.elements[key]);
        }
    }
}

const stack = new Stack<number | string>();
stack.push(1);
stack.push(2);
stack.push(3);
stack.push("4");

while (!stack.isEmpty()) {
    console.log(stack.pop());
}
