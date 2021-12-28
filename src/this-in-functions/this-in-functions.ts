export function func(this: Date, name: string, age: number): void {
    console.log(this);
    console.log(name, age);
}

func.call(new Date(), "Abacaxiguy", 18);
func.apply(new Date(), ["Abacaxiguy", 18]);
