const superheroes = ['아이언맨', '캡틴 아메리카', '토르', '닥터 스트레인지'];

superheroes.forEach(hero=>{
    console.log(hero);
})

const array = [1, 2, 3, 4, 5, 6,];
const squared = array.map(n => n * n);
console.log(squared);

const index = superheroes.indexOf('토르');
console.log(index);

const todos = [
    {
        id: 1,
        text: '자바스크립트 입문',
        done: true
    },
    {
        id: 2,
        text: '함수 배우기',
        done: true
    },
    {
        id: 3,
        text: '객체와 배열 배우기',
        done: true
    },
    {
        id: 4,
        text: '배열 내장함수 배우기',
        done: false
    }
];

const index2 = todos.findIndex(todo => todo.id === 3);
console.log(index2);

const todo = todos.find(todo => todo.id === 3);
console.log(todo);

const tasksNotDone = todos.filter(todo => todo.done === false);
console.log(tasksNotDone);

const numbers = [10, 20, 30, 40];
const index3 = numbers.indexOf(30);
numbers.splice(index3, 1);
console.log(numbers);

const sliced = numbers.slice(0, 2); // 0부터 시작해서 2전까지

console.log(sliced); // [10, 20]
console.log(numbers); // [10, 20, 40]

const value = numbers.shift();
console.log(value);
console.log(numbers);

const value2 = numbers.pop();
console.log(value2);
console.log(numbers);

numbers.unshift(5);
console.log(numbers);

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const concated = arr1.concat(arr2);

console.log(concated);


console.log(array.join()); // 1,2,3,4,5
console.log(array.join(' ')); // 1 2 3 4 5
console.log(array.join(', ')); // 1, 2, 3, 4, 5


let sum = numbers.reduce((accumulator, current) => {
    console.log({ accumulator, current });
    return accumulator + current;
}, 0);

console.log(sum);

// const numbers = [1, 2, 3, 4, 5];
// let sum = numbers.reduce((accumulator, current, index, array) => {
//     if (index === array.length - 1) {
//         return (accumulator + current) / array.length;
//     }
//     return accumulator + current;
// }, 0);
//
// console.log(sum);