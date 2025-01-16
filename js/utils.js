import { scanSessionStorage } from "./sessionStorage.js";

export function navigateToHome(){
  window.location.href = "index.html";
}

export function navigateToUser(){
  window.location.href = "user.html";
}

export function navigateToLogin(){
  window.location.href = "login.html";
}

export function textErrorLogin(){
  let span = document.getElementById("textError");
  span.textContent = "Usuário ou Senha está inválido!";
}

export function removeTextErrorLogin(){
  const existingError = document.querySelector("#textError");
  if (existingError) {
    existingError.textContent = "";
  }
}

export function validateInputs() {
  const inputs = document.querySelectorAll("input[required]");

  inputs.forEach(input => {
    const existingError = input.parentNode.querySelector(".textError");
    if (existingError) {
      existingError.remove();
    }

    if (!input.value.trim()) {
      const span = document.createElement("span");
      span.className = "textError";
      span.textContent = `O campo ${input.placeholder} é obrigatório`;
      input.parentNode.appendChild(span);
    }
  });
}

export function userLogado(){
  let session = scanSessionStorage();
  for (let users of session){
    for (let item of users){
      const p = document.getElementById("userName");
      p.textContent = `Olá, ${item.username}`;
    }
  }
}