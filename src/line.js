'use strict';

const lineXY = function (p0, p1, t) {
  return [(p0[0] + p1[0]) * t, (p0[1] + p1[1]) * t];
};

exports.default = lineXY;
