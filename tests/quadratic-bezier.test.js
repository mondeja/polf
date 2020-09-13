'use strict';

const {quadraticBezierXY} = require('./../src/index');


const pointOnQuadraticBezierCases = [
  [[0, 0], [0, 10], [10, 10], .5, [2.5, 7.5]],
  [[0, 0], [0, 10], [10, 10], .25, [0.625, 4.375]],

  [[0, 0], [10, 0], [10, 10], .5, [7.5, 2.5]],
  [[0, 0], [-10, 0], [-10, -10], .25, [-4.375, -0.625]],
];

describe('quadraticBezierXY(p0, p1, p2, t)', () => {
  test.each(pointOnQuadraticBezierCases)(
    'quadraticBezierXY(%p, %p, %p, %p) ⇢ %p',
    (p0, p1, p2, t, result) => {
      expect(quadraticBezierXY(p0, p1, p2, t)).toEqual(result);
    }
  );
});
