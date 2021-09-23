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