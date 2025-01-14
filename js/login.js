import { addSessionStorage } from "./sessionStorage.js";
import { navigateToHome, textErrorLogin, validateInputs } from "./utils.js";

const inputUser = document.getElementById("inputUser");
const inputPassword = document.getElementById("inputPassword");
const button = document.getElementById("btnToEnter");

button.addEventListener("click", () => {
  fetch("../json/users.json")
  .then(response => response.json())
  .then(json => {
    if (inputUser.value == "" || inputPassword.value == ""){
      validateInputs();
    } else{
      validateInputs();
      validateLogin(json);
    }
  })
  .catch(error => {
    console.error("Erro ao carregar o arquivo: ", error);
  })
});

function validateLogin(json){
    let array = json.user;
    for (let user of array){
      if (user.username == inputUser.value && user.password == inputPassword.value){
        navigateToHome();
        addSessionStorage(user.username, user);
        return;
      }
    }
    textErrorLogin();
}