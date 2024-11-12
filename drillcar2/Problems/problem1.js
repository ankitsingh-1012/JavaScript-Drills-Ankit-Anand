import { inventory } from "../problem-data.js";

let cars;

try {
    cars = inventory.filter((val) => val.id === 33);
    if (cars.length === 0) {
        throw new Error("No car found with ID 33.");
    }
} catch (error) {
    console.error(error.message);
    cars = error.message;
}

export { cars };
