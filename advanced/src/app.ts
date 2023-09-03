const a: number = 45;
let b: string = '45';

class Person {
    // noinspection JSUnusedLocalSymbols
    constructor(private name: string) {}
}

const me = new Person('Gleb');

console.log('App is running');
console.log(a, b);

console.log(me);

// demo comment

const map = new Map();

const btn = document.querySelector('#btn')!;

btn.addEventListener('click', () => {
    console.log('Btn clicked!');
});