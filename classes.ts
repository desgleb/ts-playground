class Typescript {
    version: string;

    constructor(version: string) {
        this.version = version;
    }

    info(name: string) {
        return `[${name}]: Typescript version is ${this.version}`;
    }
}

class Car {
    readonly model: string;
    readonly numberOfWheels: number = 4;

    constructor(theModel: string) {
        this.model = theModel;
    }
}

// alternative usage of readonly
// class Car {
//     readonly numberOfWheels: number = 4;
//
//     constructor(readonly model: string) {
//         this.model = model;
//     }
// }

// modifiers

class Animal {
    protected voice: string = ''; // available in this class and class that extends this one
    public color: string = 'black';

    // private available in this class only
    private go() {
        console.log('Go');
    }
}

class Cat extends Animal {
    public setVoice(voice: string):void {
        this.voice = voice;
    }
}

const cat = new Cat();
cat.setVoice('test');
console.log(cat.color);
// cat.voice

// abstract classes - development only
abstract class Component {
    abstract render(): void;
    abstract info(): string;
}

class AppComponent extends Component {
    render(): void {
        console.log('Component on render');
    }

    info(): string {
        return 'This is info';
    }
}
