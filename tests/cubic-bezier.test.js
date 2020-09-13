'use strict';

const {cubicBezierXY} = require('./../src/index');

const pointOnCubicBezierCases = [
  [[0, 0], [0, 10], [10, 10], [10, 0], .5, [5, 7.5]],
  [[0, 0], [0, 10], [10, 10], [10, 0], .25, [1.5625, 5.625]],
  [[0, 0], [0, -9], [-9, -9], [-9, 0], .5, [-4.5, -6.75]],
];

describe('cubicBezierXY(p0, p1, p2, p3, t)', () => {
  test.each(pointOnCubicBezierCases)(
    'cubicBezierXY(%p, %p, %p, %p, %p) ⇢ %p',
    (p0, p1, p2, p3, t, result) => {
      expect(cubicBezierXY(p0, p1, p2, p3, t)).toEqual(result);
    }
  );
});
