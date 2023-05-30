Math.round = function(number) {
  return Number(number.toFixed(0));
};

Math.ceil = function(number) {
  const rounded = Number(number.toFixed(0));
  return rounded >= number ? rounded : rounded + 1
  
};

Math.floor = function(number) {
  const rounded = Number(number.toFixed(0));
  return rounded <= number ? rounded : rounded - 1;
};