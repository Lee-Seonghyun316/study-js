const cat = {
    name : 'kitty'
};

function getNameError(animal){
    return animal.name;
}

const nameError = getNameError(cat);
console.log(nameError);

//logical operation(for error resolution)

function getName(animal){
    if(animal){
        return animal.name;
    }
    return undefined;
}

const name = getName(cat);
console.log(name);

//use &&(truthy)

function getNameAnd(animal){
    return animal && animal.name;
}

const nameAdd = getNameAnd(cat);
console.log(nameAdd);

//before use ||(falsy)

const namelessCat = {
    name : ''
};

function getNameless(animal){
    const catName = animal && animal.name;
    if(!catName){
        return '이름이 없습니다. ';
    }
    return catName;
}

const printNameless = getNameless(namelessCat);
console.log(printNameless);

//after use ||(falsy)

function getNamelessOr(animal){
    const catName = animal && animal.name;
    return catName || '이름이 없는 동물입니다. ';
}

const printOrResult = getNamelessOr(namelessCat);
console.log(printOrResult);