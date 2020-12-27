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
function getPrice(product){
    let price = 0;
    if(product === 'macbookPro') return 3000000;
    if(product === 'iphoneXR') return 1000000;
    if(product === 'lemonCandy') return 1000;
    return '...아직 안팔아요';
}
console.log(getPrice('macbookPro'));//3000000
console.log(getPrice('cookie'));//...아직 안팔아요


//use switch : return 시 break 생략

function getPriceSwitch(product){
    switch (product){
        case 'macbookPro':
            return 3000000;
        case  'iphoneXR':
            return 1000000;
        case 'lemonCandy':
            return 1000;
        default:
            return '...품절';
    }
}

console.log(getPriceSwitch('사과'));//...품절
console.log(getPriceSwitch('lemonCandy'));//1000



//use object
function  getPriceObject(product){
    const price = {
        'macbookPro': 3000000,
        'iphoneXR' : 1000000,
        'lemonCandy': 1000
    };
    return price[product] || '...품절입니다';
}

console.log(getPriceObject('바나나'));//...품절입니다
console.log(getPriceObject('iphoneXR'));//1000000



//use object(function)

function cookieObject(cookie) {
    const tasks = {
        chocolateCookie() {
            console.log('chocolateCookie판매 : 2000');
        },
        vanillaCookie() {
            console.log('vanillaCookie판매 : 2000');
        }
    };
    if (!tasks[cookie]) {
        console.log('...?');
        return;
    }
    tasks[cookie]();
}
cookieObject('chocolateCookie');//chocolateCookie판매 : 2000

