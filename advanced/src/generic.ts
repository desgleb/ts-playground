// const cars: string[] = ['Ford', 'Audi'];
// const cars2: Array<string> = ['Ford', 'Audi'];

// const promise = new Promise<number>(resolve => {
//     setTimeout(() => {
//         resolve(42);
//     }, 2000);
// });
//
// promise.then(data => {
//     console.log(data.toFixed());
// });

function mergeObjects<T extends object, R extends object>(a: T, b: R) {
    return Object.assign({}, a, b);
}

const merged = mergeObjects({name: 'Gleb'}, {age: 26});
const merged2 = mergeObjects({model: 'Ford'}, {year: 2010});

// const merged3 = mergeObjects({a: 1}, 'bbb');
// console.log(merged3);

// ==========================

interface ILength {
    length: number
}
function withCount<T extends ILength>(value: T): {value: T, count: string} {
    return {
        value,
        count: `В этом объекте ${value.length} символов`
    }
}

// console.log(withCount('Привет, Typescript'));
// console.log(withCount(['I', 'Am', 'Array']));
// console.log(withCount(20));
// console.log(withCount({length: 20}));

// =============================

