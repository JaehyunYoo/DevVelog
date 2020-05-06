const formDom = document.querySelector('.js-form'),
      inputDom = document.querySelector('.input'),
      greetings = document.querySelector('.js-greetings');

const USER_LS = "currentUser",
      SHOWING_LS = "showing";

function SaveTodo(text){
  localStorage.setItem(USER_LS,text);
}      
// 이벤트 새로고침 방지 텍스트 value값 가져오기 텍스트가 잇을경우 폼 숨김처리
function handleEvent(event){
  event.preventDefault();
  const inputValue = inputDom.value;
  paintUser(inputValue);
  SaveTodo(inputValue);
}      
// null 경우의수
function ForName(){
    formDom.classList.add(SHOWING_LS);
    formDom.addEventListener("submit",handleEvent);
}      
// null 이 아닐 경우 텍스트 보이고 폼은 숨김처리
function paintUser(text){
  formDom.classList.remove(SHOWING_LS);
  greetings.classList.add(SHOWING_LS);
  greetings.innerText = `Hello ${text}`;
} 
function loadName(){

  const currentUser = localStorage.getItem(USER_LS);

  if(currentUser === null){
    ForName(currentUser);
  } else {
    paintUser(currentUser);
  }
}
function init(){
  loadName();
}
init();