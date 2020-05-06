const clockContainer = document.querySelector(".js-clock"),
      clockTitle = document.querySelector("p");

function getTime() {
  const date = new Date();
  const minutes = date.getMinutes();
  const hours = date.getHours();
  const seco = date.getSeconds();

  clockTitle.innerText = `${hours < 10 ? `0${hours}` : hours}:${
    minutes < 10 ? `0${minutes}` : minutes
    }:${seco < 10 ? `0${seco}` : seco}`;
}
function init() {
  setInterval(getTime, 1000);
}

init();

