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

// Angular like example
// interface ComponentDecorator {
//     selector: string;
//     template: string;
// }
//
// function Component(config: ComponentDecorator) {
//     return function <T extends { new(...args: any[]): object }>
//     (Constructor: T) {
//         return class extends Constructor {
//             constructor(...args: any[]) {
//                 super(...args);
//
//                 const el = document.querySelector(config.selector)!;
//                 el.innerHTML = config.template;
//             }
//         }
//     }
// }
//
// function Bind(_: any, _2: any, descriptor: PropertyDescriptor): PropertyDescriptor {
//     const original = descriptor.value;
//
//     return {
//         enumerable: false,
//         configurable: true,
//         get() {
//             return original.bind(this);
//         }
//     }
// }
//
// @Component({
//     selector: '#card',
//     template: `
//     <div class="card">
//         <div class="card-content">
//             <span class="card-title">Card Component</span>
//         </div>
//     </div>
//     `
// })
// class CardComponent {
//     constructor(public name: string) {
//     }
//
//     @Bind
//     logName(): void {
//         console.log(`Component's name is ${this.name}`);
//     }
// }
//
// const card = new CardComponent('My New Component');
//
// const btn = document.querySelector('#btn')!;
//
// btn.addEventListener('click', card.logName);

// one more decorator

type ValidatorType = 'required' | 'email';

interface ValidatorConfig {
    [prop: string]: {
        [validateProp: string]: ValidatorType
    }
}

const validators: ValidatorConfig = {}

function Required(target: any, propName: string) {
    validators[target.constructor.name] = {
        [propName]: 'required'
    }
}

class Form {
    @Required
    public email: string | void;

    constructor(email?: string) {
        this.email = email;
    }
}
