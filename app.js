const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username"

//preventDefault - 브라우저의 기본동작을 막아줌.
function onLoginSubmit(event) {
  event.preventDefault(); // 기본동작을 막음.
  loginForm.classList.add(HIDDEN_CLASSNAME); // form에 hidden class 추가
  const username = loginInput.value; // input값을 username에 변수에 저장
  localStorage.setItem(USERNAME_KEY, username); // setItem(저장)("username"(key),username(변수))
  // greeting.innerText = "Hello " + username;
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello ${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
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