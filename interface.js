$(document).ready(function() {
  var thermostat = new Thermostat();
  updateTemperation();
  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayweather(city);
  })

  $('#power-saving').text('on')
  updateTemperation();


  $('#temp-up').click(function() {
    if(thermostat.temp() >= thermostat._maximum) {
      alert('Cannot increase temperature: temperature too high')
    }
    thermostat.up(1);
    updateTemperation();
  });

  $('#temp-down').click(function() {
    if(thermostat.temp() <= thermostat._minimum) {
      alert( "Cannot reduce temperature: temperature too low" );
    }
    thermostat.down(1);
    updateTemperation();
  });

  $('#temp-reset').click(function() {
    thermostat.reset();
    updateTemperation();
  });

  $('#psm-on').click(function() {
    thermostat.turnOnPowerSave();
    $('#power-saving').text('on');
    updateTemperation();
  });

  $('#psm-off').click(function() {
    thermostat.turnOffPowerSave();
    $('#power-saving').text('off');
    updateTemperation();
  });t

  function updateTemperation() {
    $('#temperature').text(thermostat.temp());
    $("#display-current-usage").text(thermostat.current_usage());
    $('#temperature').attr('class', thermostat.current_usage());
  }

  function displayweather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&APPID=479fcdaf07d67e7f48eb3caa03c563f5';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temp').text(data.main.temp);
    })
  }
});
