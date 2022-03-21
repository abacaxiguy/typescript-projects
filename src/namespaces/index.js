/* eslint-disable @typescript-eslint/no-namespace */
var MyNamespace;
(function (MyNamespace) {
    MyNamespace.name = "Sup";
    var NamespacePerson = /** @class */ (function () {
        function NamespacePerson(name) {
            this.name = name;
        }
        return NamespacePerson;
    }());
    MyNamespace.NamespacePerson = NamespacePerson;
    var namespacePerson = new NamespacePerson("sup");
    console.log(namespacePerson);
    var OtherNamespace;
    (function (OtherNamespace) {
        OtherNamespace.name = "Sup";
    })(OtherNamespace = MyNamespace.OtherNamespace || (MyNamespace.OtherNamespace = {}));
})(MyNamespace || (MyNamespace = {}));
var namespacePerson = new MyNamespace.NamespacePerson("sup");
console.log(namespacePerson);
console.log(MyNamespace.name);
console.log(MyNamespace.OtherNamespace.name);
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="module/module.ts" />
console.log(MyNamespace.OtherNamespace.name);
