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

// --------------#2.13-15 Conditionals 조건문
//parseInt - string -> number 변환
//inNaN() -> NaN인지 확인 후 rreturn함으로 boolean type으로 알려줌
// console.log(age, parseInt(age)); age - string / parseInt(age) - Number

// -----------조건문의 기본 if else문
// if(조건) {
//   조건 === true
// } else {
//   조건 === false
// }

// const age = parseInt(prompt("How old are you?")); // prompt 입력이 가능한 입력창이 뜸.css 수정 불가능 string

// [ 조건문 ] 18세이하 술을 마실수 없다는

// if(isNaN(age) || age < 0) { // 문자입력시 NaN(true), 숫자 입력시 parseInt 때문에 Str -> num 변환
//   console.log("Please write a real positive number");
// } else if(age < 18) { // 입력 숫자가 18세 미만일 경우 밑에 문구 표기 (ture)
//   console.log("You are too young");
// } else if(age >= 18 && age <= 50) { // 18 이상 &&(and) 50 이하일때 표기 // ||(or)
//   console.log("You can drink");
// } else if (age > 50 && age <= 80) { // 50 초과 80 이하 입력시 문자 표기
//   console.log("You should exerise");
// } else if (age === 100) { // 80 이상일때도 같은 문구가 표기되기 때문에 순서를 조정해야한다.
//   console.log("Wow you are wise")
// } else if (age > 80) { // 80초과일때 표기
//   console.log("You can do whatever you want.")
// }

// ---------- #3.0 The Document Objects
//console.dir(document); --> document안에  element 구성하고 있는 것을 볼 수 있다.
// Javascript는 HTML을 접근하고 읽을 수 있고, 변경도 가능하다.
// document.title = "Hi" -> html의 title 명을 변경할 수 있다.

// ----------- #3.1 HTMl in javascript
// html내의 element를 js에서 가지고 올수도 있고, 변경할수도 있음.

// const title = document.getElementById("title"); // getElementById - ID Tag를 불러올 때 사용

// title.innerText = "got you!"; // title변수를 불러와서 본문의 내용(innerText)을 수정함.

// console.log(title.id); // 변수 title의 지정되어 있는 id를 찾음.
// console.log(title.className); // 변수 title의 지정되어 있는 className을 찾음.

// ----------- #3.2 Searching For Elements
// getElement - 불러오면 array(배열)형태로 불러옴.
// const hellos = document.getElementsByClassName("hello"); // html class명을 찾는 함수
// const title = document.getElementsByTagName("h1"); // h1의 태그를 찾는 함수

// querySelector - element를 css 방식으로 불러옴 + 첫번째꺼만 불러옴.
// querySelectorAll - elements를 css방식으로 불러옴 + 조건에 부합하는 전부를 불러옴.
// const title = document.querySelector(".hello h1"); // class명 hello 안에 있는 h1을 찾는 함수
// const title = document.querySelector(".hello h1:first-child"); // class명 hello 안에 있는 h1 첫번째를 찾는 함수
// const title = document.querySelector("#hello"); // id명이 hello인것을 찾음.

// ----------- #3.3-3.5 Events
// console.dir(title); -> 실행시 on이 붙은건 event listener

// const h1 = document.querySelector(".hello h1");
// // title.style.color = "blue"; // title의 style color를 변경할 수 있다.

// function handleTitleClick() {
//   // click 함수 생성
//   h1.style.color = "blue";
// }

// function handleMouseEnter() {
//   // mouseenter 함수 생성
//   h1.innerText = "Mouse is here";
// }

// function handleMouseLeave() {
//   // mouseleave 함수 생성
//   h1.innerText = "Mouse is gone!";
// }

// function handleWindowResize() {
//   // resize 함수 생성
//   document.body.style.backgroundColor = "tomato";
// }

// function handleWindowCopy() {
//   // copy 함수 생성
//   alert("copier!");
// }

// function handleWindowOffline() {
//   // offline 함수 생성
//   alert("SOS no WIFI");
// }

// function handleWindowOnline() {
//   // online 함수 생성
//   alerrt("all good!!");
// }

// addEventListener과 on 방식 둘다 가능하다.
// 하지만 addEvent를 선호하는 이유는 remove를 이용하여 event 제거도 가능하기 때문이다.

// h1.onclick = handleTitleClick; // addEventListener과 동일함.
// h1.addEventListener("click", handleTitleClick); // 이벤트 추가, 클릭하면 handleTitleClick 함수가 실행
// h1.addEventListener("mouseenter", handleMouseEnter) // mouseenter 마우스 이벤트 추가
// h1.addEventListener("mouseleave", handleMouseLeave) // mouseeleave 마우스 이벤트 추가

// window.addEventListener("resize", handleWindowResize); // window에 resize 이벤트 추가
// window.addEventListener("copy", handleWindowCopy); // window에 copy 이벤트 추가
// window.addEventListener("offline", handleWindowOffline); // window에 인터넷 offline 이벤트 추가
// window.addEventListener("online", handleWindowOnline); // window에 인터넷 online 이벤트 추가

// ----------------# 3.6 CSS in javascript part -1
// css style 변경은 CSS 파일에서 하는 것이 좋다.

// step 1. element를 찾아라
// step 2. event를 listen 해라
// step 3. 그 event에 반응해라.

// const h1 = document.querySelector(".hello h1");

// function handleTitleClick() {
//   const currentColor = h1.style.color;
//   let newColor;
//   if (currentColor === "blue") {
//     newColor = "tomato";
//   } else {
//     newColor = "blue";
//   }
//   h1.style.color = newColor;
// }

// h1.addEventListener("click", handleTitleClick);

// ----------------# 3.7 CSS in javascript part -2

// const h1 = document.querySelector(".hello h1");

// // css에 미리 active 클래스명을 삽입한 후에 클릭할때 active 클래스명을 만들어줌.
// // 반복되는 string이 있을때(raw value)는 변수로 선언하여 사용하는게 에러발생 확률이 낮다

// //[버그] 기존의 class명이 있음에도 그걸 무시하고 새로 만들어지는 버그가 잇음
// function handleTitleClick() {
//   const clickedClass = "clicked";
//   if (h1.className === clickedClass) {
//     // 클래스명이 active일때 ""(tomato) 입력
//     h1.className = "";
//   } else {
//     // 클래스명이 "" 일때 active(blue) 입력.
//     h1.className = clickedClass;
//   }
// }

// h1.addEventListener("click", handleTitleClick);

// ----------------# 3.8 CSS in javascript part -3
// className = class전체를 바꿈 // classList = class 일부를 바꿈

// const h1 = document.querySelector(".hello h1");

// function handleTitleClick() {
//   const clickedClass = "clicked";
//   if (h1.classList.contains(clickedClass)) {
//     h1.classList.remove(clickedClass);
//   } else {
//     h1.classList.add(clickedClass);
//   }
// }

// h1.addEventListener("click", handleTitleClick);

////////////////toggle ////////

const h1 = document.querySelector(".hello h1");

function handleTitleClick() {
  h1.classList.toggle("clicked");
  // toggle (class명)
}

h1.addEventListener("click", handleTitleClick);
