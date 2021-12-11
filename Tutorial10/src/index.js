const temperature = require('temperature.js');
const distance = require('distance.js');

window.onload = function () {
    document.getElementById('celsius').addEventListener('change', temperature.fromCelsius);
    document.getElementById('celsius').addEventListener('input', temperature.fromCelsius);
    document.getElementById('kelvin').addEventListener('change', temperature.fromKelvin);
    document.getElementById('kelvin').addEventListener('input', temperature.fromKelvin);
    document.getElementById('fahrenheit').addEventListener('change', temperature.fromFahrenheit);
    document.getElementById('fahrenheit').addEventListener('input', temperature.fromFahrenheit);
    document.getElementById('kilometers').addEventListener('change', distance.fromKilometers);
    document.getElementById('kilometers').addEventListener('input', distance.fromKilometers);
    document.getElementById('miles').addEventListener('change', distance.fromMiles);
    document.getElementById('miles').addEventListener('input', distance.fromMiles);
}