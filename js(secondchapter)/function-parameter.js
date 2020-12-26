//함수 파라미처 넣기 전
function circle(r) {
    return Math.PI*r*r;
}

const area = circle(4);
console.log(area);//50.26548245743669

//함수 파라미터 넣은 후 (ES5)
function circleParameter(r){
    const radius = r || 1;
    return Math.PI * radius * radius;
}
const areaParameter = circleParameter();
console.log(areaParameter);

//함수 파라미터 넣은 후 (ES6)
function circleSix(r=1){
    return Math.PI * r * r;
}
const areasix = circleSix();
console.log(areaParameter);