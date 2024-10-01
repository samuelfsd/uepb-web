const path = require('path')

console.log(path.dirname('usr/share/gnome'))
console.log(path.resolve('usr', 'share', 'gnome'))
console.log(path.resolve('/', 'usr', 'share', 'gnome'))

const { celsiusToFahrenheit } = require('./temp')

console.log(celsiusToFahrenheit(40))

const isEven = require('is-even')

console.log(isEven(2))