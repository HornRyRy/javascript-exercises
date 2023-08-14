const convertToCelsius = function(fahrTemp) {
  celTemp = (fahrTemp - 32) * (5 / 9)
  output = Math.round(celTemp * 10) / 10
  return output
};

const convertToFahrenheit = function(celTemp) {
  fahrTemp = (celTemp * (9/5) + 32)
  output = Math.round(fahrTemp * 10) / 10
  return output
};

let x = convertToCelsius(80)
console.log(x)

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
