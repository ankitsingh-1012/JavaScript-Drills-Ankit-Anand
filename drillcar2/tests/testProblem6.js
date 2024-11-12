import { selectCar } from "../Problems/problem6.js";
import { inventory } from "../problem-data.js";
let selectedCars=selectCar(inventory);
console.log(selectedCars);