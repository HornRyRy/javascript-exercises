const add = function(x, y) {
	let num = x + y
  return num
};

const subtract = function(x, y) {
	let num = x - y
  return num
};

const sum = function(array) {
  userSum = 0
  array.forEach((num) =>{
    userSum = userSum + num
  })
  return userSum
};

const multiply = function(array) {
  product = 1
  array.forEach((num) =>{
    product = num * product
  })
  return product
};

const power = function(x, y) {
	let num = x ** y
  return num
};

const factorial = function(num) {
  if(num == 1 || num == 0){
    return 1
  }else if(num > 1){
    return num * (factorial(num-1))
  }
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
