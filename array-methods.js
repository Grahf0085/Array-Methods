export function map(arr, callback) {

  const newArray = [];

  for(let i = 0; i < arr.length; i++) {

    newArray[i] = callback(arr[i]);
    
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
