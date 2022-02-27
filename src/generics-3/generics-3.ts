interface PersonProtocol<T = string, U = number> {
    name: T;
    lastName: T;
    age: U;
}

type PersonProtocol2<T = string, U = number> = {
    name: T;
    lastName: T;
    age: U;
};

const student: PersonProtocol2<string, number> = {
    name: "me",
    lastName: "me again",
    age: 1,
};

const student1: PersonProtocol<number, number> = {
    name: 2,
    lastName: 3,
    age: 1,
};

const student2: PersonProtocol2 = {
    name: "me",
    lastName: "me again",
    age: 1,
};

console.log(student, student1, student2);
