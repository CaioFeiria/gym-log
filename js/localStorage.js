export function addOrUpdateLocalStorage(key, value){
  const exist = localStorage.getItem(key) ? JSON.parse(localStorage.getItem(key)) : [];
  exist.push(value);
  JSON.stringify(localStorage.setItem(key, exist));
}

export function getLocalStorage(key){
  return JSON.parse(localStorage.getItem(key));
}

export function loadLocalStorage(){
  return localStorage.key ? localStorage.key : [];
}

