// ---------- #2.2 ~ 2.3 Variables

// const a = 5;
// const b = 2;
// let myName = "DR";

// console.log(6 + a);
// console.log(6 * a);
// console.log(6 / a);
// console.log("Hello " + myName);

// myName = "DongRock";

// console.log("your new name is " + myName);

// ---------- #2.4 Boolean - true or false

// undefined=값이 정의되지 않음
// null=값이 없음
// const amIFat = ture; // "" 작성하게되면 String
// let something; // undefined
// console.log(amIFat);

// ------------- #2.5 Arrays

// const mon = "mon";
// const tue = "tue";
// const wed = "wed";
// const thu = "thu";
// const fri = "fri";
// const sat = "sat";
// const sun = "sun";

// 배열을 만들기위해서는 [] 안에 문자열을 입력 해야함. 각 항목간의 , 입력해야함.
// const daysOfWeek = ["mon", "tue", "wed", "thu", "fri", "sat"];

// console.log(daysOfWeek); // 배열항목 전체를 볼 수 있음.

// -- Get Item from Array
// console.log(daysOfWeek);

// -- Add one more day to the array -
// daysOfWeek.push("sun"); // 배열 맨뒤에 "sun"을 추가
// console.log(daysOfWeek);

// const toBuy = ["potato", "tomato", "pizza"];
// toBuy.push("kimbab");

// ----------- #2.6 Objects
// ++ 설명이 필요하지 않은 데이터 리스트는 array로
// ++ 설명이 필요한 정보가 담긴 데이터 리스트들은 object로

// const playerName = "DR";
// const playerPoints = 121212;
// const playerHandsome = false;
// const playerFat = "little bit"; // 양이 너무 많음

// const player = ["nico", 1212, false, "little bit"]; // 배열로 나열은 무슨의미인지 모름.

// // 중괄호를 이용하여 객체의 부가적인 내용을 추가할 수 있음.
// const player = {
//   name: "DR",
//   points: 10,
//   fat: true,
// };

// console.log(player);
// console.log(player.name);
// console.log(player["name"]); // console.log(player.name);와 동일한 값

// console.log(player);
// player.fat = flase; // const여도 객채내의 fat의 내용을 수정함 (업데이트)
// player.lastName = "potato"; // lastName을 추가할 수도 있음.
// player.points = player.points + 15; // 이처럼 추가할 수도 있음.
// console.log(player);

// ----------- #2.7-2.8 Functions
// 반복해서 사용할 수 있는 코드조각.
// function의경우 (){} 를 필수로 작성.

//nameOfPerson,age = argument
// function sayHello (nameOfPerson, age) {
//   console.log("Hello my name is " + nameOfPerson + " and i'm " + age);
// }
// // sayHello(); // 함수 실행방법.
// sayHello("nico", 10);
// sayHello("dal", 23);
// sayHello("lynn", 21);

// function plus(a, b) {
//   console.log(a + b);
// }
// function divide(a, b) {
//   console.log( a / b);
// }

// plus(2, 3); // a = 2 , b = 3 => 2/3
// divide(10, 2); // a=2 , b=2 => 10/2

// const player = {
//   name: "dr",
//   sayHello: function (otherPersonName) {
//     console.log("Hello " + otherPersonName + " nice to meet you");
//   },
// };
// console.log(player.name);
// player.sayHello("lynn");
// player.sayHello("nico");

// ----------- #2.9 ReCap (복습)
// const 상수를 위주로 사용하나, 변경사항이 있을대는 let 을 사용
// var는 절대 사용하지 말것 !!!
// null - 값이 없음. /undefined - 값이 할당되어있지 않음.
// const toBuy = ["a", "b", "c"];
// console.log(toBuy);
// toBuy[2] = "water"; ==> data 값 바꿈.
// console.log(toBuy);
// toBuy.push("meat"); ==> 배열 마지막에 "meat"가 추가됨.
// console.log(toBuy);

// -------------- #2.10 Recap ||
// Objects
// const player = {
//   name: "dongrock",
//   age: 29,
// };
// console.log(player);
// console.log(player.name); // 1-방식
// console.log(player["name"]); // 2-방식둘다 같음.
// player.sexy = "soon"; // sexy를 추가.
// console.log(player);

// function plus(a, b) {
//   console.log(a + b);
// }

// plus(5, 10); // a=5 / b=10

// -********* 계산기 숙제.
// const calculator = {
//   add: function (a, b) {
//     console.log(a + b);
//   },
//   minus: function (a, b) {
//     console.log(a - b);
//   },
//   div: function (a, b) {
//     console.log(a / b);
//   },
//   multi: function (a, b) {
//     console.log(a * b);
//   },
//   power: function (a, b) {
//     console.log(a ** b); -- > 제곱
//   },
// };

// calculator.add(1, 2);
// calculator.minus(1, 2);
// calculator.div(1, 2);
// calculator.multi(1, 2);
// calculator.power(1, 2);

// ------------ #2.11 returns
// const age = 96;
// function calculateKrage(ageOfForeigner) {
//   return ageOfForeigner + 2; // return 추가
// }

// // return 없이 실행하면 undefined 나옴.
// const krAge = calculateKrage(age);

// console.log(krAge);

// const calculator = {
//   add: function (a, b) {
//     return a + b;
//   },
//   minus: function (a, b) {
//     return a - b;
//   },
//   multi: function (a, b) {
//     return a * b;
//   },
//   div: function (a, b) {
//     return a / b;
//   },
//   power: function (a, b) {
//     return a ** b;
//   },
// };

// const plusResult = calculator.add(2, 3); // 5
// const minusResult = calculator.minus(plusResult, 10); // -5
// const multiResult = calculator.multi(10, minusResult); // -50
// const divResult = calculator.div(multiResult, plusResult); // -10
// const powerResult = calculator.power(divResult, minusResult);
