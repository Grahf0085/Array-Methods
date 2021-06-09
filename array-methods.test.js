import { map, filter } from './array-methods';

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

    console.log(filteredArray);

    expect(filteredArray).toEqual(['exuberant', 'destruction', 'present']);

  });
});

