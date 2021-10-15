// 기본 변수 불러옴
const toDoForm = document.getElementById("todo-form");
const toDoInput = document.querySelector("#todo-form input");
const toDoList = document.getElementById("todo-list");

// 오타방지 약어
const TODOS_KEY = "todos";

// Array 할 수 있게 설정
let toDos = [];

// localStroage 저장 하는 함수
function saveToDos() {
  // 현재 도메인의 localStroage객체에 접근 후 setItem을 사용해 항목 하나를 추가 - localStrorage.setItem
  // 저장하는 값을 Array 로 저장 할 수있게 문자열로 변환
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

// Todo List 항목 제거하는 함수
function deleteToDo(event) {
  const li = event.target.parentElement; // (parentElement) 현재 노드의 부모요소 - li
  li.remove(); // li 제거
  // 해당 li 만 제거한 후 다른 요소들을 모아 새로운 배열로 반환
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos(); // localStroage 저장하는 함수 실행
}

// Todo List 항목을 만드는 함수
function paintToDo(newTodo) {
  const li = document.createElement("li"); // li 생성
  li.id = newTodo.id; // li에 해당 시간의 id 설정
  const span = document.createElement("span"); // span 생성
  span.innerText = newTodo.text; // 생성된 span에 작성한 input을 저장
  const button = document.createElement("button"); // btn 생성
  button.innerText = "❌"; // 생성된 btn에 X 입력
  button.addEventListener("click", deleteToDo); // btn 클릭시 Todo List 항목을 제거하는 함수
  li.appendChild(span); // li의 자식 span
  li.appendChild(button); // li의 자식 btn / li > span = btn
  toDoList.appendChild(li); // ul#todo-list의 자식 li
}

// input에 작성하는 Todo List를 저장하는 함수
function handleToDoSubmit(event) {
  event.preventDefault(); // input의 기본값(reset)을 제거
  const newTodo = toDoInput.value; // input에 작성한 값을 변수설정
  toDoInput.value = ""; // 저장할때 ""공백으로 reset 시켜주는 효과
  // input에 작성되는 값을 객체로 표기. -> value는 newTodo / id 생성
  const newTodoObj = {
    text: newTodo,
    id: Date.now(),
  };
  toDos.push(newTodoObj); // 작성마다 항목 추가
  paintToDo(newTodoObj);
  saveToDos();
}

// input 에 저장하는 함수를 호출(handleToDoSubmit)
toDoForm.addEventListener("submit", handleToDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintToDo);
}
