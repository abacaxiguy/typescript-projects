export class Company {
    public readonly name: string;
    private readonly employees: Employee[] = [];
    protected readonly cnpj: string;

    constructor(name: string, cnpj: string) {
        this.name = name;
        this.cnpj = cnpj;
    }

    addEmployee(employee: Employee): void {
        this.employees.push(employee);
    }

    showEmployees(): void {
        this.employees.forEach((employee) => console.log(employee));
    }
}

export class Employee {
    constructor(
        public readonly name: string,
        public readonly lastName: string,
    ) {}
}

const company1 = new Company("Github", "11.111.111/0001-11");
const myEmployee1 = new Employee("Abacaxiguy", "from the github");
const myEmployee3 = new Employee("straight up 🍍", "from the github");
company1.addEmployee(myEmployee1);

company1.addEmployee({
    name: "not the 🍍",
    lastName: "from the github",
});

company1.addEmployee(myEmployee3);
company1.showEmployees();
