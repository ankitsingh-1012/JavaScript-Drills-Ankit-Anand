import { carInYear } from "./problem4.js";
import { inventory } from "./problem1.js";

let totalYear = carInYear(inventory);

function carOlder(totalYear) {
    try {
        if (totalYear.length === 0) {
            throw new Error("No car years available.");
        }
        let carOld = [];
        for (let car of totalYear) {
            if (car > 2000) {
                carOld.push(car);
            }
        }
        return carOld;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export { carOlder };
