const kelvin = prompt(
  "Enter the temperature in kelvin to convert it to celcius and fahrenheit."
);
const celcius = kelvin - 273;
let fahrenheit = Math.round(celcius * (9 / 5) + 32);

alert(
  `The temperature is ${celcius} degrees Celcius and ${fahrenheit} degrees Fahrenheit.`
);
