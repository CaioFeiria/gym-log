export function navigateToHome(){
  window.location.href = "index.html";
}

export function textErrorLogin(){
  let span = document.getElementById("textError");
  span.textContent = "Usuário ou Senha está inválido!";
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
