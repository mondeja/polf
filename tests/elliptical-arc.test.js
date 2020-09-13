'use strict';

const {ellipticalArcXY} = require('./../src/index');


const pointOnEllipticalArcCases = [
  // point
  [[3, 3], 0, 0, 0, 0, 0, [3, 3], .5, [3, 3]],
  [[-3, -3], 0, 0, 0, 0, 0, [-3, -3], .1, [-3, -3]],
  [[1, -2], 0, 0, 0, 0, 0, [1, -2], .1, [1, -2]],

  // line
  [[0, 0], 0, 0, 0, 0, 0, [10, 0], .5, [5, 0]],
  [[0, 0], 0, 0, 0, 0, 0, [-10, 0], .2, [-2, 0]],

  // Basic curve
  [[0, 0], 5, 5, 0, 0, 0, [10, 0], .5, [5, 5]],
  [[0, 0], 5, 5, 0, 0, 0, [-10, 0], .5, [-5, -5]],
];

describe('ellipticalArcXY(p0, rx, ry, xAxisRotation, largeArc, sweep, p1, t)', () => {
  test.each(pointOnEllipticalArcCases)(
    'ellipticalArcXY(%p, %p, %p, %p, %p, %p, %p, %p) ⇢ %p',
    (p0, rx, ry, xAxisRotation, largeArc, sweep, p1, t, result) => {
      expect(
        ellipticalArcXY(p0, rx, ry, xAxisRotation, largeArc, sweep, p1, t)
      ).toEqual(result);
    }
  );
});
