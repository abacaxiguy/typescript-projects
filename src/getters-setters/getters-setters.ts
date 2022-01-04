export class Person {
    constructor(
        private name: string,
        private lastName: string,
        private age: number,
        private _cpf: string,
    ) {}

    set cpf(cpf: string) {
        this._cpf = cpf;
    }

    get cpf(): string {
        return this._cpf.replace(/\D/g, "");
    }
}

const person = new Person("Abacaxi", "guy", 18, "000.000.000-00");
person.cpf = "111.111.111-11";
console.log(person.cpf);
