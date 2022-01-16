type Automobile = {
    brand: string;
    year: number;
};

type Car = {
    carBrand: Automobile["brand"];
    yearBrand: Automobile["year"];
    name: string;
};

const car: Car = {
    carBrand: "Ford",
    yearBrand: 2020,
    name: "Car",
};

console.log(car);
