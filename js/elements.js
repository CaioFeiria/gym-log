import { loadLocalStorage } from "./localStorage";

export function createOptionsSelect(){
  if (loadLocalStorage()){
    let existsItemsLs = loadLocalStorage();
    
    for (let item in existsItemsLs){
      const option = document.createElement("option");
      option.setAttribute("value", item);
      option.textContent = item.key;
      console.log(item.key);
    }
  }
}