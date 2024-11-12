import { arrayOfObjects } from "../persons.js";
import { pos3 } from "../problems/problem4.js";
let position3=pos3(arrayOfObjects);
console.log(` name: ${position3[0].name}, city: ${position3[0].city}`);