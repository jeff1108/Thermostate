const MINIMUM_TEMPERATURE = 10
const MAXIMUM_TEMPERATURE = 25
var Thermostat = function () {
  this._temperature = 20
  this._minimum = MINIMUM_TEMPERATURE
  this._powerSave = false
  this._maximum = MAXIMUM_TEMPERATURE

}

Thermostat.prototype.temp = function () {
  return this._temperature
}

Thermostat.prototype.up = function (degrees) {
  if (this.powerSave() && this._temperature + degrees > this._maximum) {
      throw new Error('Power Save Mode limits temperature to 25.')
  } else {
    this._temperature += degrees
    return this._temperature
  }
}

Thermostat.prototype.down = function (degrees) {
  if (this._temperature - degrees < this._minimum) {
    throw new Error('Lower than minimum degree')
  } else {
    this._temperature -= degrees
  }
  return this._temperature
}

Thermostat.prototype.powerSave = function () {
  return this._powerSave
}

Thermostat.prototype.turnOnPowerSave = function () {
  this._powerSave = true
}
