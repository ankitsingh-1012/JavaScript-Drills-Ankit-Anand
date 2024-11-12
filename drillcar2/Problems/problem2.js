function last(inventory) {
    try {
        if (inventory.length === 0) {
            throw new Error("Inventory is empty.");
        }
        let lastCar = inventory.filter((car, index) => index === inventory.length - 1);

        if (lastCar.length > 0) {
            console.log(`Last car is a ${lastCar[0].car_make} ${lastCar[0].car_model}`);
        }
    } catch (error) {
        console.error(error.message);
    }
}

export { last };
