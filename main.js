const regBtn = document.getElementById("register");
const logBtn = document.getElementById("login");
const togContainer = document.querySelector(".toggle-container");
const rightContent = document.querySelector(".right");
const leftContent = document.querySelector(".left");
const regContent = document.querySelector(".register");
const logContent = document.querySelector(".login");

regBtn.addEventListener("click", regPanel);

function regPanel() {
  togContainer.classList.add("active");
  rightContent.classList.remove("active");
  leftContent.classList.add("active");
  logContent.classList.remove("active");
  regContent.classList.add("active");
}

logBtn.addEventListener("click", logPanel);

function logPanel() {
  togContainer.classList.remove("active");
  rightContent.classList.add("active");
  leftContent.classList.remove("active");
  logContent.classList.add("active");
  regContent.classList.remove("active");
}
