import { removeSessionStorage, scanSessionStorage } from "./sessionStorage.js";
import { navigateToHome, navigateToLogin, navigateToUser, userLogado } from "./utils.js";

const buttonWorkouts = document.getElementById("btnWorkouts");
const buttonUser = document.getElementById("btnUser");
const buttonExit = document.getElementById("btnExit");

document.addEventListener("DOMContentLoaded", () => {
  buttonUser.classList.add("ativo");
  userLogado();
});

buttonWorkouts.addEventListener("click", () => {
  if (!buttonWorkouts.classList.contains("ativo")) {
    buttonUser.classList.remove("ativo");
    navigateToHome();
  }
  buttonWorkouts.classList.add("ativo");
});

buttonUser.addEventListener("click", () => {
  if (!buttonUser.classList.contains("ativo")){
    buttonWorkouts.classList.remove("ativo");
    navigateToUser();
  }
  buttonUser.classList.add("ativo");
});

buttonExit.addEventListener("click", () => {
  navigateToLogin();
  let list = scanSessionStorage();
  for (let subArray of list){
    subArray.forEach(item => {
      removeSessionStorage(item.username);
    });
  }
});