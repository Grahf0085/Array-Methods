import { map, filter, findIndex, reduce, every } from './array-methods';

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

describe('reduce', () => {
  it('After each function call, the return value is passed as the accumulator argument of the next function call. If the second initialValue parameter is not supplied, the first function call should be the first item as the accumulator, and the second array item as the item', () => {

    const namesLength = [2, 5, 7, 3, 1, 2];

    const totalLength = reduce(namesLength, (accumulator, item) => { return accumulator + item; }, 0);
    const totalLengthTwo = reduce(namesLength, (accumulator, item) => { return accumulator + item; }, 2);


    expect(totalLength).toEqual(20);
    expect(totalLengthTwo).toEqual(22);

  });
});

describe('every', () => {
  it('eturns an overall true value if all callback return true or a truthy value', () => {

    const array1 = [1, 30, 39, 29, 10, 13];

    const everyTrueResult = every(array1, item => { return item < 40; });
    const everyFalseResult = every(array1, item => { item < 10; });

    expect(everyTrueResult).toEqual(true);
    expect(everyFalseResult).toEqual(false);

  });
});
