import { map } from './array-methods';

describe('map', () => {
  it('Takes an Array and callback of signature item => {} and creates a new Array with the return value of each called callback', () => {

    const numberArray = [1, 4, 9, 16];

    const doubledArray = map(numberArray, item => { if(item * 2) return item * 2; else return 'no'; });
    
    expect(doubledArray).toEqual([2, 8, 18, 32]);
    expect(doubledArray.length).toEqual(numberArray.length);

  });
});

describe('filter', () => {
  it('Takes an Array and callback of signature item => {} and creates a new Array with all items whose callback returned true or a truthy value', () => {



  });
});

