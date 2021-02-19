"use strict";

var filterMap = function filterMap(objArray, objName, valueToCompare, outputObjectValue) {
  if (!objArray || !objName || !valueToCompare) throw new TypeError("Some required fields are undefined");
  return objArray.filter(function (obj) {
    return obj[objName] === valueToCompare;
  }).map(function (obj) {
    return obj[outputObjectValue || objName];
  });
};

module.exports = filterMap;