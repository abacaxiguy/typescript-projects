function noReturn(...args: string[]): void {
    console.log(args.join(" "));
}

const person = {
    myName: "Sup",
    lastName: "BITCHESSS",

    showName(): void {
        console.log(this.myName + "" + this.lastName);
    },
};

noReturn("waay", "up");
person.showName();

export { person };
