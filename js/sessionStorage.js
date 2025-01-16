export function addSessionStorage(key, value){
  const exists = sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : [];
  if (exists.length === 0){
    exists.push(value);
    sessionStorage.setItem(key, JSON.stringify(exists));
  }
}

export function getSessionStorage(key){
  return sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : [];
}

export function removeSessionStorage(key){
  sessionStorage.removeItem(key);
}

export function scanSessionStorage(){
  let list = [];
  for (let i = 0; i < sessionStorage.length; i++){
    let key = sessionStorage.key(i);
    if (key === "caio"){
      let value = getSessionStorage(key);
      list.push(value);
    }
  }
  return list;
}