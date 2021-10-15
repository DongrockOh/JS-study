const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// 오타방지 약어 변수 지정
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// login submit 함수
function onLoginSubmit(event) {
  event.preventDefault(); // 브라우저의 기본동작을 막아줌
  loginForm.classList.add(HIDDEN_CLASSNAME); // class명 "hidden"을 추가 - 미리 css에 display none 지정
  const username = loginInput.value; // input의 값
  localStorage.setItem(USERNAME_KEY, username); // localStroage에 input 값 저장
  paintGreetings(username); //함수실행(input value)
}

// loginform에 localstroage이 저장되어 있는 경우
function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME); // hidden class명 제거
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  // show the greetings
  paintGreetings(savedUsername);
}
