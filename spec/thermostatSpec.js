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
      })
    })
  });

  describe('.down', () => {
    it('decreases the temp', () => {
      expect(thermostat.down(1)).toEqual(19)
    });
    it('error when lower than the minimum degree', () => {
      expect(function() {thermostat.down(11)}).toThrow(new Error("Lower than minimum degree"))
    });
  });
});
