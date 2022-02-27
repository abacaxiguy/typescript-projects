type GetKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

const getKey: GetKeyFn = (object, key) => object[key];

const animal = {
    name: "Sup",
    addresses: ["Dn", "Az", "Ts"],
};

const addresses = getKey(animal, "addresses");
const names = getKey(animal, "name");

console.log(names, addresses);
