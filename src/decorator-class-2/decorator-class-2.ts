function myDecorator<T extends new (...args: any[]) => any>(target: T): T {
    console.log("im the decorator and i got: ", target);

    return class extends target {
        name: string;
        color: string;

        constructor(...args: any[]) {
            super(...args);
            this.name = this.reverse(args[0]);
            this.color = this.reverse(args[1]);
        }

        reverse(value: string): string {
            return value.split("").reverse().join("");
        }
    };
}

@myDecorator
export class Animal {
    constructor(public name: string, public color: string) {
        console.log("im the class");
    }
}

//const doggy = new Animal("doggy", "caramel");
//console.log(doggy);
