// Declaration merging

interface AmazonAccount {
    name: string;
}

interface AmazonAccount {
    readonly lastName: string;
    readonly addresses: readonly string[];
    age?: number;
}

const me: AmazonAccount = {
    name: "Joao",
    lastName: "Lucas",
    addresses: ["Av. Brasil"],
    age: 18,
};

me.age = 19;
console.log(me);
