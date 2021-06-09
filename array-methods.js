export function map(arr, callback) {

  const newArray = [];

  for(let i = 0; i < arr.length; i++) {

    newArray[i] = callback(arr[i]);
    
  }

  return newArray;

}


export function filter(arr, callback) {

  const newArray = []
} 