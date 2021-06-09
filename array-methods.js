export function map(arr, callback) {

  const newArray = [];

  for(let i = 0; i < arr.length; i++) {

    if(!(arr.hasOwnProperty(i))) newArray[i] = undefined;

    if(arr.hasOwnProperty(i)) newArray[i] = callback(arr[i]);
    
  }

  return newArray;

}

export function filter(arr, callback) {

  const newArray = [];
  let y = 0;

  for(let i = 0; i < arr.length; i++) {

    if(callback(arr[i])) {
      newArray[y] = callback(arr[i]);
      y++;
    }

  }

  return newArray;

} 

export function findIndex(arr, callback) {

  for(let i = 0; i < arr.length; i++) {

    if(callback(arr[i])) {
      return i;

    }
  }

  return -1;

}

export function reduce(arr, callback, initialValue) {

  let total;

  for(let i = 0; i < arr.length; i++) {
    
    if(i === 0 && initialValue) total = callback(initialValue, arr[i]);
    if(i > 0 && initialValue) total = callback(total, arr[i]);
    if(i === 0 && !initialValue) {
      total = callback(arr[i], arr[i + 1]);
      i = 2;
    }
    if(i > 0 && !initialValue) total = callback(total, arr[i]);
  
  }

  return total;

}

export function every(arr, callback) {

  let running = 0;

  for(let i = 0; i < arr.length; i++) {
    if(callback(arr[i])) running++;
  }

  if(running === arr.length) return true;

  else return false;
}
