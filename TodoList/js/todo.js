const todoForm = document.querySelector(".js-toDoForm"),
  todoInput = todoForm.querySelector(".input"),
  todoList = document.querySelector(".js-toDoList");

const TODO_LS = "toDos";
let toDos = [];

// 문자형으로 변현 후 저장 
function saveTodo(){
  localStorage.setItem(TODO_LS,JSON.stringify(toDos));
}
// 삭제 버튼 인자값 이벤트 타겟 삭제 removechild li 를 삭제 
function Deletbtn(event){
  const btn = event.target;
  const li = btn.parentNode;
  todoList.removeChild(li);
  const cleanDos = toDos.filter(function(todo){
    return todo.id !== parseInt(li.id);
  });
  toDos = cleanDos;
  saveTodo();
}
function textTodo(text) {
  // 생성되는 추가 리스트
  const li = document.createElement("li");
  //삭제버튼
  const delBtn = document.createElement("button");
  delBtn.classList.add("btn","btn-danger");
  delBtn.innerText = "Del";
  delBtn.addEventListener('click',Deletbtn);
  const span = document.createElement("span");
  const newId = toDos.length + 1;
  // 리스트에 text 값
  span.innerText = text;
  // 리스트에 id 값
  li.id = newId;
  li.classList.add("list-group-item");
  // li 안에 span 자식 추가
  li.appendChild(span);
  // li 안에 삭제 버튼 추가
  li.appendChild(delBtn);
  // ul 안에 li 추가
  todoList.appendChild(li);
  const toDoObj = {
    text: text,
    id: newId
  };
  toDos.push(toDoObj);
  saveTodo();
}

// 이벤트 새로 고침 방지 및 텍스트 박스 입력시 초기화
function handleSubmit(event) {
  event.preventDefault();
  const inputValue = todoInput.value;
  textTodo(inputValue);
  todoInput.value = "";
}

// 로컬 스토리지 TODO_LS 값 불러오기 만약 null 아닐경우 JSON 형태로 변환 후 parsedTodo 리스트에 text값을 가져와서 뿌려준다.
function loadToDos() {
  const loadedTodos = localStorage.getItem(TODO_LS);
  if(loadedTodos !== null){
    const parsedTodo = JSON.parse(loadedTodos);
    parsedTodo.forEach(function(todo){
      textTodo(todo.text);
    })

  }
}
// 실행함수
function init() {
  loadToDos();
  todoForm.addEventListener("submit", handleSubmit);
}
init();
