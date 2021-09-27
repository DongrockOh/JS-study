const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";

//preventDefault - 브라우저의 기본동작을 막아줌.
function onLoginSubmit(event) {
  event.preventDefault(); // 기본동작을 막음.
  loginForm.classList.add(HIDDEN_CLASSNAME); // form에 hidden class 추가
  const username = loginInput.value; // input값을 username에 변수에 저장
  localStorage.setItem("username", username); // setItem(저장)("username"(key),username(변수))
  // greeting.innerText = "Hello " + username;
  greeting.innerText = `Hello ${username}`; // greeting변수에 Hello + username 텍스트 삽입.
  greeting.classList.remove(HIDDEN_CLASSNAME); // h1의 hidden class를 삭제
}

loginForm.addEventListener("submit", onLoginSubmit);