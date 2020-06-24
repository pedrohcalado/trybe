const functions = require('./functionsFrom7_3');
// const { describe } = require('yargs');


describe('Exercise 1', () => {
  test('The sum of 4 and 5 must be 9', () => {
    expect(functions.sum(4, 5)).toBe(9);
  });
  it('The sum of 0 and 0 must be 0', () => {
    expect(functions.sum(0,0)).toBe(0);
  });
  test(('if one of the parameters is not a number, return an error'), () => {
    expect(() => {
      functions.sum(4,'5')
    }).toThrow()
  });
  test("the error message should be 'parameters must be numbers'", () => {
    expect(() => {functions.sum(3,'4')}).toThrow(Error('parameters must be numbers'))
  });
});

describe('Exercise 2', () => {
  test('The index of the item 3 shold be 2', () => {
    expect(functions.myIndexOf([1, 2, 3, 4], 3)).toBe(2)
  });
  it('Number five is not in the array, the result should be -1', () => {
    expect(functions.myIndexOf([1, 2, 3, 4], 5)).toBe(-1);
  });
});

describe('Exercise 3', () => {
  test('The sum should be 10', () => {
    expect(functions.mySum([1, 2, 3, 4])).toBe(10);
  });
  test('The sum should be 0', () => {
    expect(functions.mySum([1, -2, -3, 4])).toBe(0);
  });
});

describe('Exercise 4', () => {
  it('The result should be [1, 2, 4]', () => {
    expect(functions.myRemove([1, 2, 3, 4], 3)).toEqual([1, 2, 4])
  });
  it('The result should not be [1, 2, 3, 4]', () => {
    expect(functions.myRemove([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  });
  it('The array used as parameter should not be modified in this case', () => {
    expect(functions.myRemove([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
  it('The result should be [1, 2, 3, 4]', () => {
    expect(functions.myRemove([1, 2, 3, 4], 6)).toEqual([1, 2, 3, 4])
  })
});

describe('Exercise 5', () => {
  it('The expected array should be [1, 2, 4', () => {
    expect(functions.myRemoveWithoutCopy([1, 2, 3, 4], 3)).toEqual([1, 2, 4]);
  })
  it('The expected array should not be [1, 2, 3, 4]', () => {
    expect(functions.myRemoveWithoutCopy([1, 2, 3, 4], 3)).not.toEqual([1, 2, 3, 4])
  })
  it('The array should not be modified', () => {
    expect(functions.myRemoveWithoutCopy([1, 2, 3, 4])).toEqual([1, 2, 3, 4]);
  });
  it('The array should not be modified', () => {
    expect(functions.myRemoveWithoutCopy([1, 2, 3, 4], 5)).toEqual([1, 2, 3, 4]);
  });
});

describe('Exercise 6', () => {
  it('The result should be fizzbuzz', () => {
    expect(functions.myFizzBuzz(15)).toBe('fizzbuzz');
  });
  it('The result should be fizz', () => {
    expect(functions.myFizzBuzz(6)).toBe('fizz');
  });
  it('The result should be buzz', () => {
    expect(functions.myFizzBuzz(10)).toBe('buzz');
  });
  it('The result should be 8', () => {
    expect(functions.myFizzBuzz(8)).toBe(8);
  });
  it('The result should be false', () => {
    expect(functions.myFizzBuzz('15')).toBeFalsy();
  })
});

describe('Exercise 7', () => {
  test('The variable is not defined', () => {
    expect(functions.thereIsV).not.toBeUndefined();
  });
});

describe('Exercise 8', () => {
  it('The function was not defined', () => {
    expect(typeof functions.thereIsF).toBe('function');
  })
})
