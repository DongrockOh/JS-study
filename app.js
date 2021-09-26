const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");

//preventDefault - 브라우저의 기본동작을 막아줌.
function onLoginSubmit(event) {
  event.preventDefault();
  console.log(loginInput.value);
}

loginForm.addEventListener("submit", onLoginSubmit);
