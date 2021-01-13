const numbers = [1,2,3,4,5];

let average = numbers.reduce((accumulator, current, index, numbers)=>{
    if(index === numbers.length-1){
        return (accumulator+current)/numbers.length
    }
    return accumulator+current;
},0);

console.log(average);

const give = [1,2,3,4,5,10,20,30,40];

// let biggerThanTen = give.reduce((accumulator, current, index, give)=>{
//    if(current>10) {
//        accumulator++;
//        if(index ===give.length-1){
//            return accumulator;
//        }
//    }
// },0)

let biggerThanTen = give.reduce((accumulator, current)=>{
    if(current>10){
        return ++accumulator;
    }
    else return accumulator;
},0)

console.log(biggerThanTen);