//객체 비구조화 할당

const Erica = {
  name: "이성현",
  gender: "여",
  age: 21,
};

const Joo = {
  name: "주영서",
  gender: "여",
  age: 21,
};

function print(person) {
  const { name, gender, age } = person;
  const text = `${name}(${gender})의 나이는 ${age}이다. `;
  console.log(text);
}

print(Erica); //이성현(여)의 나이는 21이다.
print(Joo); //주영서(여)의 나이는 21이다.

//파라미터 단계에서 객체 비구조화 할당
function printSetParameter({ name, gender, age }) {
  const text = `${name}(${gender})의 나이는 ${age}이다. `;
  console.log(text);
}

print(Erica); //이성현(여)의 나이는 21이다.
print(Joo); //주영서(여)의 나이는 21이다.

//비구조화 할당시 기본값 설정(함수, 객체)
const object = { name: "삼색이" };

function whichCat({ name, age = 1 }) {
  console.log(name);
  console.log(age);
}

whichCat(object);

const { name, age = 2 } = object;

console.log(name); //삼색이
console.log(age); //2

//비구조화 할당 시 이름 바꾸기

const Cat = {
  name: "마를린",
  age: 2,
};

const { name: nickname } = Cat;
console.log(nickname); //마를린

//배열 비구조화 할당
const id = [123, 456];
const [strawberry, apple] = id;

console.log(strawberry); //123
console.log(apple); //456

//배열 비구조화 할당(기본값 지정)
const newId = [789];
const [watermelon, lemon = 0] = newId;

console.log(watermelon);
console.log(lemon);

//깊은 값 비구조화 할당

const deepObject = {
  state: {
    information: {
      name: "Erica",
      language: ["Korean", "English", "Chinese"],
    },
  },
  value: 5,
};

//비구조화 할당 두번 사용->깊은 값 빼내기

// const { name, lanquages } = deepObject.state.information;
// const { value } = deepObject;
//
// const extracted = {
//   name,
//   lanquages,
//   value,
// };
