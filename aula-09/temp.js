const celsiusToFahrenheit = (value) => (value * 1.8) + 32

const fahrenheitToCelsius = (value) => (value - 32) / 1.8

module.exports = {
  celsiusToFahrenheit,
  fahrenheitToCelsius
}