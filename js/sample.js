const Test = function(){//function Test() 변수에 함수를 할당할때는 익명함수로 함수명을 생략해도 된다
    console.log("test");
};
Test();

function Shin(name, price){
    console.log(name + price);
}
Shin('shin dong jin ', 3 + '세 입니다!');

const sum = (number1, number2) => {
    //console.log(number1 - number2);
    return number1 + number2;
}
const sum_result_1 = sum(10, 20);
const sum_result_2 = sum(20, 30);

const sum_result = sum_result_1 + sum_result_2;
console.log('총 합은 ' + sum_result);

let name1 = '철수';
let name2 = '영희';
let string = `${name1}는 ${name2}를 좋아합니다`;
console.log(string);

if(10 > 20){
    console.log('ok');
} else if(50 <= 40) {
    console.log('no');
} else {
    console.log('gogo')
}

let animal = 'dog';
switch(animal){
    case 'dog' : console.log('kk');
    //break;
    case 'cat' : console.log('mm');
    break;
    case 'cow' : console.log('cc');
    break;
    default:console.log('nothing');
    break;
}

let i=0;
while(i<10){
    console.log(i);
    i = i+1;
}

for(let i=0; i<10; i=i+1){
    console.log(i+10);
}

let flag = false;
do{
    console.log('do-while');
} while(flag === true);