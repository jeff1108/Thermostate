describe('Thermostat', () => {

  var thermostat

  beforeEach(function () {
    thermostat = new Thermostat ()
  })

  describe('.temp', () => {
    it('starts at 20C', () => {
      expect(thermostat.temp()).toEqual(20);
    });
  });

  describe('.up', () => {
    it('increases the temp', () => {
      expect(thermostat.up(1)).toEqual(21)
    });
    describe('when power saving mode is on', () => {
      it('should have a maximum temperature of 25', () => {
        thermostat.turnOnPowerSave()
        thermostat.up(5)
        expect(function(){thermostat.up(1)}).toThrow(new Error('Power Save Mode limits temperature to 25.'))
      });
    });
    describe('when power saving mode is off', () => {
      it('should have a maximum temperature of 32', () => {
        thermostat.turnOffPowerSave()
        thermostat.up(12)
        expect(function(){thermostat.up(1)}).toThrow(new Error('Maximum temperature is 32.'))
      });
    });
  });

  describe('.down', () => {
    it('decreases the temp', () => {
      expect(thermostat.down(1)).toEqual(19)
    });
    it('error when lower than the minimum degree', () => {
      expect(function() {thermostat.down(11)}).toThrow(new Error('Lower than minimum degree'))
    });
  });

  describe('.reset', () => {
    it('resets the temperature to 20', () => {
      thermostat.up(4)
      thermostat.reset()
      expect(thermostat.temp()).toEqual(20)
      thermostat.down(4)
      thermostat.reset()
      expect(thermostat.temp()).toEqual(20)
    });
  });

  describe('.current_usage', () => {
    it('show energy usage', () => {
      thermostat.reset()
      thermostat.down(3)
      expect(thermostat.current_usage()).toEqual('Low usage')
      thermostat.reset()
      thermostat.up(2)
      expect(thermostat.current_usage()).toEqual('Medium usage')
      thermostat.reset()
      thermostat.up(6)
      expect(thermostat.current_usage()).toEqual('High usage')
    });
  });
});
