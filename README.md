# Thermostat Project

- Build the business logic to model a simple thermostate, and hook it up to a dynamic visual interface using jQuery - all within the browser.
- Build the business logic to model a simple thermostate, and hook it up to a dynamic visual interface using jQuery - all within the browser.
- Finally, use JavaScript to fetch data from external sources and display that on the page - all right from the page.
- Underpinning all this will be a new testing framework to help test-drive the JavaScript code - Jasmine.

## Launching the Application
```
$ git clone https://github.com/jeff1108/Thermostate.js.git
$ cd Thermostate.js
$ open index.html
```

## Business Logic
* Thermostat starts at 20 degrees
* You can increase the temperature with an up function
* You can decrease the temperature with a down function
* The minimum temperature is 10 degrees
* If power saving mode is on, the maximum temperature is 25 degrees
* if power saving mode is off, the maximum temperature is 32 degrees
* Power saving mode is on by default
* You can reset the temperature to 20 with a reset function
* You can ask about the temperature to 20 with a reset functon
* You can ask about the thermostat's current energy usage: <18 is low-usage, <25 is medium-usage, anything else is high-usage.
* (Add an inferface, low-usage will be indicated with green, medium-usgae indicated with black, high-usage indicated with red.)


## Learning Outcome
### Topic Covered
* JavaScript Prototype Constructor model
* jQuery to change the DOM element
* Ajax using Weather API
* Jasmine as test framework
* CSS styling

## State of Completion
### Implement Functionality
* Thermostat display the current temperature
* It show error message when lower/higher than minimum/maximum degree
* It can turn on/off saving power move
* It can change the temperature
* It show temperature of different of different city by using API from OpenWeather
* CSS styling
* It show temperature of different of different city by using API from OpenWeather
* CSS styling


### What I would do next
* Create a remote API ( build on web server to provide this API using Sintra )
* Save the selected city information using API

## Technical 
### Tech
* JavaScript, Jasmine
* OpenWeather API
* jQuery, Ajax
