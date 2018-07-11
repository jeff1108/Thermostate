const MINIMUM_TEMPERATURE = 10
var Thermostat = function () {
  this._temperature = 20
  this._minimum = MINIMUM_TEMPERATURE
}

Thermostat.prototype.temp = function () {
  return this._temperature
}

Thermostat.prototype.up = function (degrees) {
  this._temperature += degrees
  return this._temperature
}

Thermostat.prototype.down = function (degrees) {
  if (this._temperature - degrees < this._minimum) {
    throw new Error('Lower than minimum degree')
  } else {
    this._temperature -= degrees
  }
  return this._temperature
}
