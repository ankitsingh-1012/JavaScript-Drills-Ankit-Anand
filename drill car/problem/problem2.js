function findLastCar(inventory) {
    try {
        if (inventory.length === 0) {
            throw new Error("Inventory is empty.");
        }
        const lastCar = inventory[inventory.length - 1];
        return `Last car is a ${lastCar.car_make} ${lastCar.car_model}`;
    } catch (error) {
        console.error(error.message);
        return error.message;
    }
}

export { findLastCar };

