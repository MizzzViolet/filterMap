const filterMap = (objArray, objName, valueToCompare, outputObjectValue) => {
  if (!objArray || !objName || !valueToCompare) throw new TypeError("Some required fields are undefined");
  return objArray.filter(obj => obj[objName] === valueToCompare).map(obj => obj[outputObjectValue || objName]);
};

module.exports = filterMap;