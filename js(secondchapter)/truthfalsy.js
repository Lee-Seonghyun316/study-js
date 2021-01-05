//삼항 연산자 이용 전
function print(person){
    if(!person) {
        console.log('사람 없음');
        return;
    }
    console.log(person);
}

const person = null;
print(person);

//삼항 연산자 이용 후
const truthy = person ? true : false;
console.log(truthy);

//not
const simple = !!person;
console.log(simple);

//복습