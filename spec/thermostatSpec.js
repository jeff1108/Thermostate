describe('Thermostat', () => {
  describe('.temp', () => {
    it('starts at 20C', () => {
      thermostat = new Thermostat();
      expect(thermostat.temp).toEqual(20);
    })
  })
})
