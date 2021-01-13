function add(a, b){
    return a+b;
    console.log('호출 불가 코드 ');
}

const sum = add(1,2);
console.log(sum);


function hello(name){
    console.log(`hello, ${name}!`);
}

hello('Erica');

const result = (a,b) => a+b;
console.log(result(3,4));