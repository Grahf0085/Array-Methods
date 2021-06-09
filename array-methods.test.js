/* eslint-disable no-sparse-arrays */
import { map, filter, findIndex, reduce, every } from './array-methods';

describe('map', () => {
  it('Takes an Array and callback of signature item => {} and creates a new Array with the return value of each called callback', () => {

    const numberArray = [1, 4, 9, 16, 0];
    const holyArray = [1, ,, 9, ,, 0];

    const doubledArray = map(numberArray, item => { return item * 2; });
    const mapHolyArray = map(holyArray, item => { return item * 2;  });
    
    expect(doubledArray).toEqual([2, 8, 18, 32, 0]);
    expect(doubledArray.length).toEqual(numberArray.length);
    expect(mapHolyArray).toEqual([2, ,, 18, ,, 0]);
    expect(holyArray.length).toEqual(mapHolyArray.length);


  });
});

describe('filter', () => {
  it('Takes an Array and callback of signature item => {} and creates a new Array with all items whose callback returned true or a truthy value', () => {

    const wordsArray = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];
    // eslint-disable-next-line comma-spacing
    const holyArray = ['spray', ,, 'elite', ,, 'destruction', ,,];

    const filteredArray = filter(wordsArray, item => { if(item.length > 6) return item; });
    const holyFilteredArray = filter(holyArray, item => { if(item.length > 6) return item; });

    expect(filteredArray).toEqual(['exuberant', 'destruction', 'present']);
    expect(holyFilteredArray).toEqual(['destruction']); 

  });
});

describe('findIndex', () => {
  it('returns the index of the first item whose callback returns true or a truthy value', () => {

    const array1 = [5, 12, 8, 130, 44];
    // eslint-disable-next-line comma-spacing
    const array2 = [5, ,, 8, ,, 44];  

    const isLargeNumber = findIndex(array1, item => { if(item > 13) return item; });
    const failArray = findIndex(array1, item => { if(item > 500) return item; });
    const isHolyArray = findIndex(array2, item => { if(item > 13) return item; });

    expect(isLargeNumber).toEqual(3);
    expect(failArray).toEqual(-1);
    expect(isHolyArray).toEqual(6);


  });
});

describe('reduce', () => {
  it('After each function call, the return value is passed as the accumulator argument of the next function call. If the second initialValue parameter is not supplied, the first function call should be the first item as the accumulator, and the second array item as the item', () => {

    const namesLength = [2, 5, 7, 3, 1, 2];
    const holyNamesLength = [2, ,, 7, ,, 1, 2];

    const totalLength = reduce(namesLength, (accumulator, item) => { return accumulator + item; }, 0);
    const totalLengthTwo = reduce(namesLength, (accumulator, item) => { return accumulator + item; }, 2);
    const totalHolyLength = reduce(holyNamesLength, (accumulator, item) => { return accumulator + item; }, 0);

    expect(totalLength).toEqual(20);
    expect(totalLengthTwo).toEqual(22);
    expect(totalHolyLength).toEqual(12);

  });
});

describe('every', () => {
  it('returns an overall true value if all callback return true or a truthy value', () => {

    const array1 = [1, 30, 39, 29, 10, 13];
    const array2 = [1, ,, 39, ,, ,, 13];


    const everyTrueResult = every(array1, item => { return item < 40; });
    const everyFalseResult = every(array1, item => { return item < 10; });
    const everyTrueEmptyResult = every(array2, item => { return item < 40; });


    expect(everyTrueResult).toEqual(true);
    expect(everyFalseResult).toEqual(false);
    expect(everyTrueEmptyResult).toEqual(true);


  });
});
