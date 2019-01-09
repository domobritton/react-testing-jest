import { total } from './App';

// mock function
const add = jest.fn(() => 3);

// unit test
test('add', () => {
    // const value = add(1, 2);
    // expect(value).toBe(3);
    expect(add(1, 2)).toBe(3);
    expect(add).toHaveBeenCalledTimes(1);
    // expect(add(5, 2)).toBe(7);
});

// integration test 
test('total', () => {
  expect(total(5, 20)).toBe('$25');
});
