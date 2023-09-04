// function Log(constructor: Function): void {
//     console.log(constructor);
// }
//
// function Log2(target: any, propName: string | Symbol) {
//     console.log(target);
//     console.log(propName);
// }
//
// function Log3(target: any, propName: string | Symbol, descriptor: PropertyDescriptor) {
//     console.log(target);
//     console.log(propName);
//     console.log(descriptor);
// }

class Component {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    logName(): void {
        console.log(`Component's name is ${this.name}`);
    }
}