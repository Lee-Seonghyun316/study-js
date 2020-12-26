const array = [];
let text = '';

//삼항연산자 사용 전
if(array.length ===0){
    text='배열 비었음';
}else {
    text='배열에 무언가 있음'
}
console.log(text);

//삼항연산자 사용 후
array.length===0? console.log('배열 비었음') : console.log('배열에 무언가 있음');