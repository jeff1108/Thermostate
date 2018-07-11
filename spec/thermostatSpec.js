describe('Thermostat', () => {
  describe('.temp', () => {
    it('starts at 20C', () => {
      thermostat = new Thermostat();
      expect(thermostat.temp()).toEqual(20);
    });
  });

  describe('.up', () => {
    it('increase the temp', () => {
      thermostat = new Thermostat
      expect(thermostat.up(1)).toEqual(21)
    });
  });
});
