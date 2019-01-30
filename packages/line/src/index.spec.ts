import { Line, getLength } from '@geo/line';

it('distance()', () => {
  const line: Line = {
    from: {
      x: 0,
      y: 0,
    },
    to: {
      x: 10,
      y: 0,
    },
  };
  expect(getLength(line)).toEqual(10);
});
