// Record
const object1: Record<string, string | number> = {
    name: "the name",
    lastName: "the last name",
    age: 20,
};

console.log(object1);

// Required, Partial, Readonly & Pick
type PersonProtocol = {
    name?: string;
    lastName?: string;
    age?: number;
};

// Required
type PersonRequired = Required<PersonProtocol>;
// Partial
type PersonPartial = Partial<PersonRequired>;
// Readonly
type PersonReadonly = Readonly<PersonPartial>;
// Pick
type PersonPick = Pick<PersonReadonly, "name" | "lastName">;

const object2: PersonPick = {
    name: "the name",
    lastName: "the last name",
};

console.log(object2);

// Extract & Exclude
type ABC = "A" | "B" | "C";
type CDE = "C" | "D" | "E";
type ExcludeType = Exclude<ABC, CDE>;
type ExtractType = Extract<ABC, CDE>;

const a: ExcludeType = "A";
const c: ExtractType = "C";

console.log(a, c);

//
type AccountMongo = {
    _id: string;
    name: string;
    age: number;
};

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, "_id">> & {
    id: string;
};

const accountMongo: AccountMongo = {
    _id: "a34df2as3ads3das2f",
    name: "Luiz",
    age: 18,
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
    const { _id, ...accountData } = accountMongo;
    return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log(accountApi);

// Module mode
export default 1;
