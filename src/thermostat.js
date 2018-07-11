const MINIMUM_TEMPERATURE = 10
const MAXIMUM_TEMPERATURE = 32
const POWER_SAVE_MAX = 25
var Thermostat = function () {
  this._temperature = 20
  this._minimum = MINIMUM_TEMPERATURE
  this._powerSave = true
  this._maximum = POWER_SAVE_MAX
}

Thermostat.prototype.temp = function () {
  return this._temperature
}

Thermostat.prototype.up = function (degrees) {
  if (this._temperature + degrees > this._maximum) {
    if (this.powerSave()) {
      throw new Error('Power Save Mode limits temperature to 25.')
    } else {
      throw new Error('Maximum temperature is 32.')
    }
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
  this._maximum = POWER_SAVE_MAX
  this._powerSave = true
}

Thermostat.prototype.turnOffPowerSave = function () {
  this._maximum = MAXIMUM_TEMPERATURE
  this._powerSave = false
}
