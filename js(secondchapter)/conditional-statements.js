//조건에 따라 다른 값 return
function favoriteFood(text) {
    return (
        text === '딸기' || text === '사탕' || text === '바닐라아이스크림' || text === '더치커'
    );
}

console.log(favoriteFood('딸기'));//true
console.log(favoriteFood('순대'));//false

//use array.includes

function favoritePerson(name){
    const nickname = ['양', '곰', '구름', '토끼'];
    return nickname.includes(name);
}

console.log(favoritePerson('양'));//ture
console.log(favoritePerson('하늘'));//false

//use =>
const favoriteAlcohol = what => ['진로', '매화수'].includes(what);

console.log(favoritePerson('진로'));//ture
console.log(favoritePerson('참이'));//false

//값에 따라 다른 결과물 반환
function getSound(animal) {
    if (animal === '개') return '멍멍!';
    if (animal === '고양이') return '야옹~';
    if (animal === '참새') return '짹짹';
    if (animal === '비둘기') return '구구 구 구';
    return '...?';
}

console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구구 구 구

//use switch : return 시 break 생략

function getSound(animal) {
    switch (animal) {
        case '개':
            return '멍멍!';
        case '고양이':
            return '야옹~';
        case '참새':
            return '짹짹';
        case '비둘기':
            return '구구 구 구';
        default:
            return '...?';
    }
}

console.log(getSound('개')); // 멍멍!
console.log(getSound('비둘기')); // 구구 구 구략

//use object
function getSoundObject(animal){
    const sounds = {
        개: '멍멍!',
        고양이: '야옹~',
        참새: '짹짹',
        비둘기: '구구 구 구'
    };
    return sounds[animal] || '...?';
}

console.log(getSoundObject('개')); // 멍멍!
console.log(getSoundObject('비둘기')); // 구구 구 구

//use object(function)

function makeSoundObject(animal) {
    const tasks = {
        개() {
            console.log('멍멍');
        },
        고양이() {
            console.log('고양이');
        },
        비둘기() {
            console.log('구구 구 구');
        }
    };
    if (!tasks[animal]) {
        console.log('...?');
        return;
    }
    tasks[animal]();
}

makeSoundObject('개');
