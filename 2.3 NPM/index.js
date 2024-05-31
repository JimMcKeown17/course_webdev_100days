// var generateName = require("sillyname");
import generateName from "sillyName";

const bodyparts = ['head', 'heart', 'lungs', 'eyes']

var sillyName = generateName();

console.log(`My name is ${sillyName}.`);

// const superheroes = require("superheroes");
import superheroes from "superheroes";

const name = superheroes.random();
const bodypart = bodyparts.choose();
console.log(`I am ${name}! I will chop off your ${bodypart} and eat your soul.`);
