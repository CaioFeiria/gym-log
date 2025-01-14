export function addSessionStorage(key, value){
  let exists = sessionStorage.getItem(key) ? JSON.parse(sessionStorage.getItem(key)) : [];
  exists.push(value);
  sessionStorage.setItem(key, JSON.stringify(exists));
}