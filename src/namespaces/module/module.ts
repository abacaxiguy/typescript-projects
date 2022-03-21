/* eslint-disable @typescript-eslint/no-namespace */

namespace MyNamespace {
    export const name = "Sup";

    export class NamespacePerson {
        constructor(public name: string) {}
    }

    const namespacePerson = new NamespacePerson("sup");
    console.log(namespacePerson);

    export namespace OtherNamespace {
        export const name = "Sup";
    }
}

const namespacePerson = new MyNamespace.NamespacePerson("sup");
console.log(namespacePerson);
console.log(MyNamespace.name);
console.log(MyNamespace.OtherNamespace.name);
