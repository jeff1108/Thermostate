var Thermostat = function () {
  this._temperature = 20
}

Thermostat.prototype.temp = function () {
  return this._temperature
}

Thermostat.prototype.up = function (degrees) {
  this._temperature += degrees
  return this._temperature
}

Thermostat.prototype.down = function (degrees) {
  this._temperature -= degrees
  return this._temperature
}
