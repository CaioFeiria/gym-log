
export function createObjectList(){
  const exercise = {
    "id": index,
    "name": inputNameExercise.value,
    "weight": inputWeight.value,
    "repetitions": inputRepettions.value,
    "completed": checkCompleted.checked
  };
  
  const list = {
    "id": index,
    "title": inputList.value,
    "exercises": exercise 
  };
}