// class constructor type
type Constructor = new (...args: any[]) => any;

// classes
function classDecorator(constructor: Constructor): any {
    // called in the class creation
    console.log("CLASS");
    console.log(constructor);
    console.log("###");

    // return can be omitted
    return class extends constructor {
        // do what you want
    };
}

// instance's method (regular)
function methodDecorator(
    classPrototype: any,
    methodName: string,
    propertyDescriptor: PropertyDescriptor,
): any {
    // called in the method creation (doesnt need to call the method)
    console.log("REGULAR METHOD");
    console.log(propertyDescriptor);
    console.log(methodName);
    console.log(classPrototype);
    console.log("###");

    // return can be omitted
    return {
        // value changes the original return:
        // value: (...args: any[]) => console.log(args),
        writable: true,
        enumerable: true,
        configurable: true,
    };
}

// static method
function staticMethodDecorator(
    classConstructor: Constructor,
    methodName: string,
    propertyDescriptor: PropertyDescriptor,
): any {
    // called in the method creation (doesnt need to call the method)
    console.log("REGULAR METHOD");
    console.log(propertyDescriptor);
    console.log(methodName);
    console.log(classConstructor);
    console.log("###");

    // return can be omitted
    return {
        // Use get/set OR value
        enumerable: true,
        configurable: true,
    };
}

// method's param
function methodsParamDecorator(
    classPrototype: any,
    methodName: string,
    propertyIndex: number,
): any {
    // called in the method creation
    console.log("METHOD PARAM");
    console.log(classPrototype);
    console.log(methodName);
    console.log(propertyIndex);
    console.log("###");

    // return is ignored
}

// static method's param
function staticMethodsParamDecorator(
    classConstructor: Constructor,
    methodName: string,
    propertyIndex: number,
): any {
    // called in the method creation (doesnt need to call the method)
    console.log("STATIC METHODS PARAM");
    console.log(classConstructor);
    console.log(methodName);
    console.log(propertyIndex);
    console.log("###");

    // return is ignored
}

// property
function propertyDecorator(classPrototype: any, propertyName: string): any {
    // called in the property creation
    console.log("PROPERTY DECORATOR");
    console.log(classPrototype);
    console.log(propertyName);
    console.log("###");

    // return can be omitted
    // Use get and set to manipulate the property value
    let propertyValue: any;
    return {
        enumerable: true,
        configurable: true,
        get: () => propertyValue,
        set: (value: any) => {
            if (typeof value === "string") {
                propertyValue = value.split("").reverse().join("");
                return;
            }
            propertyValue = value;
        },
    };
}

// static property
function staticPropertyDecorator(
    classConstructor: any,
    propertyName: string,
): any {
    // called in the static property creation
    console.log("STATIC PROPERTY DECORATOR");
    console.log(classConstructor);
    console.log(propertyName);
    console.log("###");

    // return can be omitted

    return {
        // Use get/set OR value
        enumerable: true,
        configurable: true,
    };
}

// Getter/Setter
function getterAndSetterDecorator(
    classPrototype: any,
    propertyName: string,
    propertyDescriptor: PropertyDescriptor,
): any {
    // called in the method creation
    // (can only be applied in the getter or setter - not in both)
    console.log("GETTER/SETTER regular");
    console.log(classPrototype);
    console.log(propertyName);
    console.log(propertyDescriptor);
    console.log("###");

    // return can be omitted

    return {
        // Use get/set OR value
        enumerable: true,
        configurable: true,
    };
}

// Getter/Setter static
function staticGetterAndSetterDecorator(
    classConstructor: Constructor,
    propertyName: string,
    propertyDescriptor: PropertyDescriptor,
): any {
    // called in the method creation
    // (can only be applied in the getter or setter - not in both)
    console.log("GETTER/SETTER static");
    console.log(classConstructor);
    console.log(propertyName);
    console.log(propertyDescriptor);
    console.log("###");

    // return can be omitted

    return {
        // Use get/set OR value
        enumerable: true,
        configurable: true,
    };
}

// The class and the use of decorators

@classDecorator
export class OnePerson {
    @propertyDecorator
    name: string;
    lastName: string;
    age: number;

    @staticPropertyDecorator
    static staticProperty = "STATIC PROPERTY VALUE";

    constructor(name: string, lastName: string, age: number) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
    }

    @methodDecorator
    method(@methodsParamDecorator msg: string): string {
        return `${this.name} ${this.lastName}: ${msg}`;
    }

    @staticMethodDecorator
    static staticMethod(@staticMethodsParamDecorator msg: string): string {
        return OnePerson.staticProperty + " - " + msg;
    }

    get fullName(): string {
        return this.name + " " + this.lastName;
    }

    @getterAndSetterDecorator
    set fullName(value: string) {
        const words = value.split(/\s+/g);
        const firstName = words.shift();
        if (!firstName) return;
        this.name = firstName;
        this.lastName = words.join(" ");
    }

    @staticGetterAndSetterDecorator
    static get staticPropertyGetterSetter(): string {
        return OnePerson.staticProperty;
    }

    static set staticPropertyGetterSetter(value: string) {
        OnePerson.staticProperty = value;
    }
}

// Class use

const pessoa = new OnePerson("Luiz", "Otávio", 30);
pessoa.fullName = "João Silva Oliveira";
const method = pessoa.method("Hello World!");
const staticMethod = OnePerson.staticMethod("Hello World!");
console.log(pessoa);
console.log(method);
console.log(staticMethod);
console.log(OnePerson.staticProperty);
