let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}

let numbers = [10, 20, 30, 40, 50];
for (let number of numbers) {
    console.log(number);
}

const doggy = {
    name: '멍멍이',
    sound: '멍멍',
    age: 2
};

console.log(Object.entries(doggy));
console.log(Object.keys(doggy));
console.log(Object.values(doggy));

for (let key in doggy) {
    console.log(`${key}: ${doggy[key]}`);
}

for (let i = 0; i < 10; i++) {
    if (i === 2) continue; // 다음 루프를 실행
    console.log(i);
    if (i === 5) break; // 반복문을 끝내기
}

const sum = (numbers) =>{
    let result=0;
    for (let i = 0;i<numbers.length;i++){
        result += numbers[i];
    }
    return result;
}

const give = [1,2,3,4,5];

console.log(sum(give));

// const biggerThan = (numbers) => {
//     let value = 3;
//     let newArray = [];
//     for(let i = 0;i<numbers.length;i++){
//         if(numbers[i]>value){
//             newArray.push(numbers[i]);
//         }
//     }
//     return newArray;
// }

const biggerThan = (numbers) => {
    let value = 3;
    let newArray = [];
    for(let number of numbers){
        if(number>value){
            newArray.push(number);
        }
    }
    return newArray;
}

// const biggerThan = (numbers) => {
//
//     let newArray = [];
//     for (let value in numbers){
//         if(value>3){
//             newArray.push(value);
//         }
//     }
//     return newArray;
// }
//다시 고민(위)

console.log(biggerThan(give));