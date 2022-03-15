function myDecorator(param1: string, param2: string) {
    // closure

    return function <T extends new (...args: any[]) => any>(target: T): T {
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
                return value.split("").reverse().join("") + param1 + param2;
            }
        };
    };
}

@myDecorator("_value1", "_value2")
export class Animal {
    constructor(public name: string, public color: string) {
        console.log("im the class");
    }
}

const doggy = new Animal("doggy", "caramel");
console.log(doggy);
