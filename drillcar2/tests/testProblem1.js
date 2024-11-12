import { cars } from "../Problems/problem1.js";
import { inventory } from "../problem-data.js"; // Ensure this path is correct


if (cars.length>=1) {
    console.log(`Car 33 is a ${cars[0].car_year} ${cars[0].car_make} ${cars[0].car_model}`);
} else {
    console.log("Car not found.");
}
