const ex1 =
`
const food = [{name:'바나나', calorie : 100},{name:'삼겹살', calorie : 300},{name:'햄버거', calorie : 200}];
const excercise = [{name:'유산소', calorie : 100},{name:'수영', calorie : 200},{name:'등산', calorie : 300}];

//객체 생성
let person = {
    name : '임종호',
    weight : 76,
    eat(food){
        const eatenFood = food ?? {calorie : 0};
        const increaseWeight = eatenFood.calorie / 100;
        this.weight = this.weight + increaseWeight;
    },
    excercise(excercise = {calorie : 0}){
        const decreaseWeight = excercise.calorie / 100;
        this.weight = this.weight - decreaseWeight;
    }
}

//객체 사용 및 접근
const name = person.name;
person.eat(food[0]);
console.log(person.weight);
person.eat(food[1]);
console.log(person.weight);
person.excercise(excercise[2]);
console.log(person['weight']);

//객체 속성 동적 추가
person.birth = 1988;
console.log(person);

person.sleep = () => console.log("잠잔다");

person.sleep();

//동적으로 변하는 변수의 값을 프로퍼티의 키로 하고싶을 때
let value = 'random';

//이렇게 하면 value라는 키가 생김
person.value = 'value라고 생김';

console.log(person);

person[value] = '서버에서 받아온 키값';
console.log(person);

//객체 속성 삭제

// delete person.birth;
delete person.sleep;

console.dir(person);
`;
$("#ex1").html(ex1);
