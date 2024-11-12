import { inventory } from "./problem1.js";

function selectCar(inventory) {
    try {
        if (inventory.length === 0) {
            throw new Error("Inventory is empty.");
        }
        let bmw_audi = [];
        for (let car of inventory) {
            if (car.car_make === "Audi" || car.car_make === "BMW") {
                bmw_audi.push(car);
            }
        }
        return bmw_audi;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export { selectCar };
