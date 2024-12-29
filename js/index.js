const exList = document.getElementById("exList");
const checkView = document.getElementById("checkView");
const formExericio = document.querySelector("#form_exercise");
const nomeTreino = document.getElementById("titulo_treino");
const repeticoesTreino = document.getElementById("repeticoes_treino");
const pesoTreino = document.getElementById("peso_treino");
const imagemTreino = document.getElementById("imagem_treino");
const nameList = document.getElementById("titulo_listaTreino");
let idObject = 0;

document.addEventListener("DOMContentLoaded", () => {
    formExericio.classList.add("viewOrNO");
});

checkView.addEventListener("click", () => {
    if (checkView.checked){
        formExericio.classList.remove("viewOrNO");
        nomeTreino.focus();
    } else{
        formExericio.classList.add("viewOrNO");
    }
});

document.querySelector("#btn_add").addEventListener("click", () => {
    criarObjeto();
    clearInputs();
});

function criarObjeto(){
    let idObject = localStorage.getItem("idObject") ? JSON.parse(localStorage.getItem("idObject")) : 0;
    idObject++;
    localStorage.setItem("idObject", JSON.stringify(idObject));
    
    const objetoWorkout = {
        "id": idObject,
        "nome": nomeTreino.value,
        "repeticoes": repeticoesTreino.value,
        "peso": pesoTreino.value,
        "imagem": imagemTreino.value ? imagemTreino.value : "No image"
    }

    const listWorkout = {
        "id": idObject,
        "listName": nameList.value,
        "workouts": objetoWorkout
    }

    addLocalStorage(listWorkout, objetoWorkout)
}

function clearInputs(){
    nomeTreino.value = "";
    repeticoesTreino.value = "";
    pesoTreino.value = "";
    imagemTreino.value = "";
    nomeTreino.focus();
}

function addLocalStorage(list, object){
    const exists = localStorage.getItem(list.listName) ? JSON.parse(localStorage.getItem(list.listName)) : [];
    exists.push(object);
    localStorage.setItem(list.listName, JSON.stringify(exists));

    buildWorkoutsView(list);
}

function buildWorkoutsView(){
    const keys = [];

    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        keys.push(key);
        const optionExList = document.createElement("option");
        optionExList.setAttribute("value", i);
        optionExList.textContent = key;
        exList.appendChild(optionExList);
    }

    console.log(keys)
}