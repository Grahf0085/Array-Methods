import { map, filter, findIndex } from './array-methods';

describe('map', () => {
  it('Takes an Array and callback of signature item => {} and creates a new Array with the return value of each called callback', () => {

    const numberArray = [1, 4, 9, 16, 0];

    const doubledArray = map(numberArray, item => { return item * 2; });
    
    expect(doubledArray).toEqual([2, 8, 18, 32, 0]);
    expect(doubledArray.length).toEqual(numberArray.length);

  });
});

describe('filter', () => {
  it('Takes an Array and callback of signature item => {} and creates a new Array with all items whose callback returned true or a truthy value', () => {

    const wordsArray = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

    const filteredArray = filter(wordsArray, item => { if(item.length > 6) return item; });

    expect(filteredArray).toEqual(['exuberant', 'destruction', 'present']);

  });
});

describe('findIndex', () => {
  it('returns the index of the first item whose callback returns true or a truthy value', () => {

    const array1 = [5, 12, 8, 130, 44];

    const isLargeNumber = findIndex(array1, item => { if(item > 13) return item; });
    const failArray = findIndex(array1, item => { if(item > 500) return item; });

    expect(isLargeNumber).toEqual(3);
    expect(failArray).toEqual(-1);


  });
});

