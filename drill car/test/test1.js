import { findCarById, inventory} from "../problem/problem1.js";
const car=findCarById(inventory,33);
console.log(`car 33 is a ${car[0].car_year} ${car[0].car_make} ${car[0].car_model}`);
console.log(car);