type TheDocument = {
    title: string;
    text: string;
    date?: Date;
};

const theDocument: TheDocument = {
    title: "The title",
    text: "The text",
};

console.log(theDocument.date?.toDateString() ?? "it doesnt have 'date'");
console.log(undefined ?? "it doesnt have 'date' x2");
console.log(null ?? "it doesnt have 'date' x3");
console.log(false ?? "it doesnt have 'date' x4");
console.log(0 ?? "it doesnt have 'date' x5");
console.log("" ?? "it doesnt have 'date' x6");
