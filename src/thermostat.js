const MINIMUM_TEMPERATURE = 10
const MAXIMUM_TEMPERATURE = 32
const POWER_SAVE_MAX = 25
const LOW_USAGE_MAX = 17
const MEDIUM_USAGE_MAX = 24
var Thermostat = function () {
  this._temperature = 20
  this._minimum = MINIMUM_TEMPERATURE
  this._powerSave = true
  this._maximum = POWER_SAVE_MAX
  this._lowMax = LOW_USAGE_MAX
  this._medMax = MEDIUM_USAGE_MAX
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
  if (this._temperature > POWER_SAVE_MAX) { this._temperature = POWER_SAVE_MAX }
  this._maximum = POWER_SAVE_MAX
  this._powerSave = true
}

Thermostat.prototype.turnOffPowerSave = function () {
  this._maximum = MAXIMUM_TEMPERATURE
  this._powerSave = false
}

Thermostat.prototype.reset = function () {
  this._temperature = 20
}

Thermostat.prototype.current_usage = function () {
  if (this._temperature <= this._lowMax ) {
    return 'low-usage';
  } else if (this._temperature <= this._medMax) {
    return 'medium-usage';
  } else {
    return 'high-usage';
  }
}
