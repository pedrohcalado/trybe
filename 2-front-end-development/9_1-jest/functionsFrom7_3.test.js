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
  });
});

describe('Exercise 10', () => {
  it('The objects are not deep equal', () => {
    expect(functions.obj1).toEqual(functions.obj2);
  });
  it('The objects should not be the same', () => {
    expect(functions.obj1).not.toEqual(functions.obj3);
  });
});

describe('Exercise 11', () => {
  test('The function isAbove should exist', () => {
    expect(typeof functions.isAbove).toBe('function');
  })
  test('The function isAbove should exist', () => {
    expect(functions.isAbove).toBeDefined();
  })
  test('The result should be true', () => {
    expect(functions.isAbove(2, 1)).toBeTruthy();
  })
  test('The result should be false', () => {
    expect(functions.isAbove(1, 2)).toBeFalsy();
  })
  test('THe result should be false', () => {
    expect(functions.isAbove(1, 1)).toBeFalsy();
  })
  test('The result should be true', () => {
    expect(functions.isAbove(-1, -21)).toBeTruthy();
  })
  test('The result should be true', () => {
    expect(functions.isAbove(0.2, 0.1)).toBeTruthy();
  });
  test('The parameters should be numbers, result must be false', () => {
    expect(functions.isAbove('-1', -21)).toBeFalsy();
  });
  test('The parameters should be numbers, result must be false', () => {
    expect(functions.isAbove('abc', -21)).toBeFalsy;
  })
  test('The parameters should be numbers, result must be false', () => {
    expect(functions.isAbove('abc', 'a')).toBeFalsy()
  })
})

describe('Exercise bonus 1', () => {
  it('The result should be an empty array', () => {
    expect(functions.getChange(1, 1)).toEqual([]);
  });
  it('Expect an array containing [50, 20, 10, 5]', () => {
    expect(functions.getChange(215, 300)).toEqual([50, 20, 10, 5]);
  })
  it('Expect an array containing [100, 10, 2, 2]', () => {
    expect(functions.getChange(486, 600)).toEqual([100, 10, 2, 2]);
  })
  it('Expect an array containg [200, 100, 50, 20, 10, 5, 2, 1]', () => {
    expect(functions.getChange(12, 400)).toEqual([200, 100, 50, 20, 10, 5, 2, 1]);
  });
  it("Throw an error with the message 'paid value is not enough'", () => {
    expect(() => {
      functions.getChange(100, 10)
    }).toThrow(Error('paid value is not enough'));
  })
})
