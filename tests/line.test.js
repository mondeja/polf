'use strict';

const {lineXY} = require('./../src/index');

const pointOnLineCases = [
  [[0, 0], [2, 0], .5, [1, 0]],
  [[0, 0], [2, 0], 0, [0, 0]],
  [[0, 0], [2, 0], 1, [2, 0]],

  [[0, 0], [10, 10], .5, [5, 5]],
  [[0, 0], [10, 10], .1, [1, 1]],
  [[0, 0], [10, 10], .7, [7, 7]],

  [[30, 30], [60, 60], .5, [45, 45]],
  [[-30, -30], [-60, -60], .5, [-45, -45]],
];

describe('lineXY(p0, p1, t)', () => {
  test.each(pointOnLineCases)(
    'lineXY(%p, %p, %p) ⇢ %p',
    (p0, p1, t, result) => {
      expect(lineXY(p0, p1, t)).toEqual(result);
    }
  );
});
