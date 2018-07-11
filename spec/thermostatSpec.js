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
  });

  describe('.down', () => {
    it('decreases the temp', () => {
      expect(thermostat.down(1)).toEqual(19)
    });
  });
});
